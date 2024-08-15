import crypto from 'crypto-js';
const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET!;

export const encryptClientValue = (value: string) =>
  crypto.AES.encrypt(value, clientSecret).toString();

export const decryptClientValue = (value: string) =>
  crypto.AES.decrypt(value, clientSecret).toString(crypto.enc.Utf8);
