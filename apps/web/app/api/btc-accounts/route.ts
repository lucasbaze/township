import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto-js';
import { createClient } from '../../../utils/supabase/server';
import { RawAccount } from '../../../lib/types/btc-accounts';

const serverSecret = process.env.WEB_SERVER_SECRET!;

const decryptAccountValue = (value: string) =>
  crypto.AES.decrypt(value, serverSecret).toString(crypto.enc.Utf8);

const encryptAccountValue = (value: string) =>
  crypto.AES.encrypt(value, serverSecret).toString();

const decryptAcccount = (account: RawAccount): RawAccount => {
  return {
    id: account.id,
    account_name: decryptAccountValue(account.account_name),
    btc_balance: decryptAccountValue(account.btc_balance),
  };
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  const supabase = createClient();

  const { data: accounts, error } = await supabase
    .from('btc_accounts')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(accounts.map(decryptAcccount));
}

export async function POST(req: NextRequest) {
  const { action, accountId, userId, account_name, btc_balance } =
    await req.json();

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  const supabase = createClient();

  let error;

  if (action === 'update') {
    const { error: updateError } = await supabase
      .from('btc_accounts')
      .update({
        account_name: encryptAccountValue(account_name),
        btc_balance: encryptAccountValue(btc_balance),
      })
      .eq('id', accountId);
    error = updateError;
  } else if (action === 'insert') {
    const { error: insertError } = await supabase.from('btc_accounts').insert({
      user_id: userId,
      account_name: encryptAccountValue(account_name),
      btc_balance: encryptAccountValue(btc_balance),
    });
    error = insertError;
  }

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
