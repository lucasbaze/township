import React from 'react';
import { redirect } from 'next/navigation';
import { Container, Divider } from '@chakra-ui/react';

import { createClient } from '../../utils/supabase/server';
import { LogoutButton } from './components/logout-button';
import { AccountTable } from './components/account-table';

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  const response = await fetch(
    'https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=coinbase',
  );
  let btcData = await response.json();

  if (!response.ok) {
    console.error(`Error: ${btcData}`);
    // TODO: Handle this error properly
    btcData = { RAW: { PRICE: 0 } };
  }

  return (
    <main>
      <Container
        position="relative"
        maxW={'6xl'}
        pt={{ base: 12, lg: 16 }}
        pb={{ base: 24, lg: 32 }}
        px={8}
      >
        <AccountTable userId={data.user.id} btcData={btcData} />
        <Divider mb={12} />
        <LogoutButton />
      </Container>
    </main>
  );
}
