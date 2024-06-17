import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import axios, { AxiosError } from 'axios';

// eslint-disable-next-line turbo/no-undeclared-env-vars
const GHOST_KEY = process.env.GHOST_ADMIN_KEY;

// @ts-ignore
const [id, secret] = GHOST_KEY?.split(':');

const token = jwt.sign({}, Buffer.from(secret, 'hex'), {
  keyid: id,
  algorithm: 'HS256',
  expiresIn: '5m',
  audience: '/admin/',
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email } = body;

  try {
    const payload = { members: [{ email }] };
    const headers = {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Ghost ${token}`,
    };

    await axios.post(
      'https://township-ventures.ghost.io/ghost/api/admin/members',
      payload,
      { headers },
    );

    return NextResponse.json({ message: 'success' }, { status: 200 });
  } catch (err) {
    console.log('err: ', err);
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError;
      // @ts-ignore
      const status = axiosError.response.status;
      console.log('err status: ', status);

      if (status == 422) {
        return NextResponse.json({ message: 'success' }, { status: 200 });
      }
      return NextResponse.json({ message: `${err}` }, { status: 500 });
    }
    return NextResponse.json({ message: `${err}` }, { status: 500 });
  }
}
