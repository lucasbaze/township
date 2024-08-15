'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Table,
  TableContainer,
  Th,
  Tr,
  Td,
  Thead,
  Tbody,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Spinner,
} from '@chakra-ui/react';
import { convertToUSD, satsToBTC } from '../../../utils';
import { AccountForm } from './create-edit-form';
import { RawAccount, Account } from '../../../lib/types/btc-accounts';
import { decryptClientValue } from '../../../lib/security/account-values';

interface AccountTableProps {
  userId: string;
  btcData: any;
}

const decryptAcccount = (account: RawAccount): Account => {
  const accountName = decryptClientValue(account.account_name);
  const btcBalance = parseInt(decryptClientValue(account.btc_balance), 10);

  return {
    id: account.id,
    accountName,
    btcBalance,
  };
};

const fetchAccounts = async (userId: string) => {
  const response = await fetch(`/api/btc-accounts?userId=${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch accounts');
  }
  return response.json();
};

export const AccountTable: React.FC<AccountTableProps> = ({
  userId,
  btcData,
}) => {
  const [accounts, setAccounts] = useState<Account[] | null>(null);

  useEffect(() => {
    fetchAccounts(userId)
      .then((accounts) => {
        const transformedAccounts = accounts.map(decryptAcccount);
        setAccounts(transformedAccounts || []);
      })
      .catch(console.error);
  }, []);

  const onAccountSaved = () => {
    fetchAccounts(userId)
      .then((accounts) => {
        const transformedAccounts = accounts.map(decryptAcccount);
        setAccounts(transformedAccounts || []);
      })
      .catch(console.error);
  };

  // const totalAccountBalance = accounts?.reduce(account => );

  if (!accounts) {
    return <Spinner />;
  }

  return (
    <>
      <Box display="flex" flexDir="column" alignItems="center" mb={12}>
        <Stat>
          <StatLabel>Total BTC</StatLabel>
          <StatNumber>
            ₿ {/* Add logic to calculate and display total BTC here */}
          </StatNumber>
          <StatHelpText>
            {convertToUSD(
              btcData.RAW
                .PRICE /* Add logic to calculate total balance in USD here */,
            )}
          </StatHelpText>
        </Stat>
      </Box>
      <Box display="flex">
        <Text fontSize="lg" flex="1" fontWeight="bold">
          Accounts
        </Text>
        <AccountForm
          btcData={btcData}
          userId={userId}
          onAccountSaved={onAccountSaved}
        />
      </Box>
      <TableContainer mb={12}>
        {!accounts || accounts.length === 0 ? (
          <>
            <Box>
              <Text size="md" textAlign="center">
                Log New Account
              </Text>
              <Text textAlign="center">
                Accounts are locations where you currently hold BTC
              </Text>
            </Box>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Account</Th>
                  <Th isNumeric>Bitcoin</Th>
                  <Th isNumeric>USD value</Th>
                  <Th>Edit</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr key="mock-id">
                  <Td color="gray.500">Coinbase</Td>
                  <Td isNumeric color="gray.500">
                    100,000,000
                  </Td>
                  <Td isNumeric color="gray.500">
                    {convertToUSD(1 * btcData.RAW.PRICE)}
                  </Td>
                  <Td>
                    Edit
                    {/* <AccountForm
                        account={account}
                        btcData={btcData}
                        userId={userId}
                        onAccountSaved={fetchAccounts}
                      /> */}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </>
        ) : (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Account</Th>
                <Th isNumeric>Bitcoin</Th>
                <Th isNumeric>USD value</Th>
                <Th>Edit</Th>
              </Tr>
            </Thead>
            <Tbody>
              {accounts.map((account) => (
                <Tr key={account.id}>
                  <Td>{account.accountName}</Td>
                  <Td isNumeric>{account.btcBalance}</Td>
                  <Td isNumeric>
                    {convertToUSD(
                      satsToBTC(account.btcBalance) * btcData.RAW.PRICE,
                    )}
                  </Td>
                  <Td>
                    <AccountForm
                      account={account}
                      btcData={btcData}
                      userId={userId}
                      onAccountSaved={onAccountSaved}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </TableContainer>
    </>
  );
};
