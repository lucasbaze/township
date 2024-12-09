import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '../../../utils/supabase/server';

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
    // Log the incoming request
    console.log('Incoming request:', req);

    const body = await req.text(); // Accept a string as the body
    console.log('Incoming Body:', body);
    const supabase = createClient();

    const { error } = await supabase.from('logs').insert({ log: body });

    if (error) {
      return NextResponse.json(
        { error: { message: error.message, code: 500 } },
        { status: 500, headers },
      );
    }

    return NextResponse.json({ success: true }, { status: 200, headers });
  } catch (err) {
    console.log('Error:', err);
    return NextResponse.json(
      { error: { message: `${err}`, code: 500 } },
      { status: 500, headers },
    );
  }
}
