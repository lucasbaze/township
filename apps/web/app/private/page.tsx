import { redirect } from 'next/navigation';
import {
  Container,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Table,
  TableContainer,
  Th,
  Tr,
  Td,
  Thead,
  Tbody,
  Tfoot,
  TableCaption,
} from '@chakra-ui/react';

import { createClient } from '../../utils/supabase/server';

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  const { data: accounts, error: accountsError } = await supabase
    .from('btc_accounts')
    .select('*')
    .eq('user_id', data.user.id);

  if (accountsError) throw new Error(accountsError.message);

  const response = await fetch(
    'https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=coinbase',
  );
  const btcData = await response.json();

  if (!response.ok) {
    throw new Error(`Error: ${btcData}`);
  }

  const totalAccountBalance =
    accounts.reduce((acc, curr) => curr.btc_balance + acc, 0) / 100000000;

  const totalAccountBalanceInUSD = (
    Math.round(btcData.RAW.PRICE * totalAccountBalance * 100) / 100
  ).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

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
        <Stat>
          <StatLabel>Total BTC</StatLabel>
          <StatNumber>₿ {totalAccountBalance}</StatNumber>
          <StatHelpText>{totalAccountBalanceInUSD}</StatHelpText>
        </Stat>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            {/* <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot> */}
          </Table>
        </TableContainer>
      </Container>
    </main>
  );
}
