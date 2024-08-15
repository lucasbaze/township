import React from 'react';
import { redirect } from 'next/navigation';
import { Container, Heading } from '@chakra-ui/react';

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
  const btcData = await response.json();

  if (!response.ok) {
    throw new Error(`Error: ${btcData}`);
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
        <Heading>Welcome back!</Heading>

        <AccountTable userId={data.user.id} btcData={btcData} />

        <LogoutButton />
      </Container>
    </main>
  );
}
