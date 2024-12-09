import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '../../../utils/supabase/server';

// Set up CORS to allow any domain
export const config = {
  api: {
    bodyParser: true,
    externalResolver: true,
  },
};

export async function POST(req: NextRequest) {
  // Allow any domain to access this endpoint
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { headers });
  }

  try {
    const body = await req.text(); // Accept a string as the body
    const supabase = createClient();

    const { error } = await supabase.from('logs').insert({ log: body });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500, headers },
      );
    }

    return NextResponse.json({ success: true }, { status: 200, headers });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: `${err}` }, { status: 500, headers });
  }
}
