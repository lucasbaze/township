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
import { convertToUSD, satsToBTC } from '../../utils';

import { LogoutButton } from '../../components/logout-button';

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

  const totalAccountBalanceInUSD = convertToUSD(
    btcData.RAW.PRICE * totalAccountBalance,
  );

  return (
    <main>
      <Container
        position="relative"
        maxW={'6xl'}
        pt={{ base: 12, lg: 16 }}
        pb={{ base: 24, lg: 32 }}
        px={8}
      >
        <LogoutButton />
        <Heading>Welcome back!</Heading>
        <Stat>
          <StatLabel>Total BTC</StatLabel>
          <StatNumber>₿ {totalAccountBalance}</StatNumber>
          <StatHelpText>{totalAccountBalanceInUSD}</StatHelpText>
        </Stat>
        <TableContainer>
          <Table variant="simple">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th>Account</Th>
                <Th isNumeric>Bitcoin</Th>
                <Th isNumeric>USD value</Th>
              </Tr>
            </Thead>
            <Tbody>
              {accounts.map((account) => (
                <Tr>
                  <Td>{account.account_name}</Td>
                  <Td isNumeric>
                    {account.btc_balance.toLocaleString('en-US')}
                  </Td>
                  <Td isNumeric>
                    {convertToUSD(
                      satsToBTC(account.btc_balance * btcData.RAW.PRICE),
                    )}
                  </Td>
                </Tr>
              ))}
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
