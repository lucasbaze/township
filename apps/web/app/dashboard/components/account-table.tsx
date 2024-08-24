'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardBody,
  Text,
  Flex,
  Spinner,
  Tooltip,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { convertToUSD, satsToBTC, formatNumber } from '../../../utils';
import { AccountForm } from './create-edit-form';
import { RawAccount, Account } from '../../../lib/types/btc-accounts';
import { decryptClientValue } from '../../../lib/security/account-values';
import { formatNumberWithCommas } from '../../../lib/ui-utils/formatting';

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

  const totalAccountBalance =
    accounts?.reduce((acc, curr) => curr.btcBalance + acc, 0) || 0;

  if (!accounts) {
    return <Spinner />;
  }

  return (
    <>
      <Box display="flex" flexDir="column" alignItems="center" mb={12}>
        <Box mb={12} alignItems="center">
          <Text fontSize="14px" textAlign="center">
            TOTAL BTC
          </Text>
          <Text fontSize="36px" fontWeight="medium" textAlign="center">
            ₿ {formatNumberWithCommas(totalAccountBalance)}
          </Text>
          <Text fontSize="14px" textAlign="center">
            <i>{satsToBTC(totalAccountBalance)} BTC</i>
            <Popover>
              <PopoverTrigger>
                <InfoOutlineIcon ml={2} transform="translateY(-1px)" />
              </PopoverTrigger>
              <PopoverContent>1 BTC = ₿100,000,000</PopoverContent>
            </Popover>
          </Text>
        </Box>
        <Box>
          <Text fontSize="24px" fontWeight="medium">
            {convertToUSD(
              satsToBTC(totalAccountBalance) *
                btcData.RAW
                  .PRICE /* Add logic to calculate total balance in USD here */,
            )}
          </Text>
          <Text>
            <i>1 BTC = ${btcData.RAW.PRICE}</i>
          </Text>
        </Box>
      </Box>
      <Box display="flex" mb={6}>
        <Box flex="1">
          <Text fontSize="lg" flex="1" fontWeight="medium">
            ACCOUNTS
          </Text>
          <Text fontSize="12px">Locations you have BTC</Text>
        </Box>
        <AccountForm
          btcData={btcData}
          userId={userId}
          onAccountSaved={onAccountSaved}
        />
      </Box>
      <VStack align="stretch" gap={4}>
        {accounts
          .sort((a, b) => b.btcBalance - a.btcBalance)
          .map((account) => (
            <Card key={account.id}>
              <CardBody p={4} pb={6}>
                <Text mb={6}>{account.accountName}</Text>
                <Flex gap={12}>
                  <Box flex={1}>
                    <Text fontSize="12px">BITCOIN</Text>
                    <Text fontSize="22px">
                      ₿{formatNumber(account.btcBalance)}
                    </Text>
                    <Text fontSize="10px">
                      <i>{satsToBTC(account.btcBalance)} Bitcoin</i>
                    </Text>
                  </Box>
                  <Box flex={1}>
                    <Text fontSize="14px">USD</Text>
                    <Text>
                      {convertToUSD(
                        satsToBTC(account.btcBalance) * btcData.RAW.PRICE,
                      )}
                    </Text>
                  </Box>
                </Flex>
                <Box position="absolute" top={2} right={2}>
                  <AccountForm
                    account={account}
                    btcData={btcData}
                    userId={userId}
                    onAccountSaved={onAccountSaved}
                  />
                </Box>
              </CardBody>
            </Card>
          ))}
      </VStack>
    </>
  );
};

// <TableContainer mb={12}>
//   {!accounts || accounts.length === 0 ? (
//     <>
//       <Box>
//         <Text size="md" textAlign="center">
//           Log New Account
//         </Text>
//         <Text textAlign="center">
//           Accounts are locations where you currently hold BTC
//         </Text>
//       </Box>
//       <Table variant="simple">
//         <Thead>
//           <Tr>
//             <Th>Account</Th>
//             <Th isNumeric>Bitcoin</Th>
//             <Th isNumeric>USD value</Th>
//             <Th>Edit</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           <Tr key="mock-id">
//             <Td color="gray.500">Coinbase</Td>
//             <Td isNumeric color="gray.500">
//               100,000,000
//             </Td>
//             <Td isNumeric color="gray.500">
//               {convertToUSD(totalAccountBalance * btcData.RAW.PRICE)}
//             </Td>
//             <Td>
//               Edit
//               {/* <AccountForm
//                   account={account}
//                   btcData={btcData}
//                   userId={userId}
//                   onAccountSaved={fetchAccounts}
//                 /> */}
//             </Td>
//           </Tr>
//         </Tbody>
//       </Table>
//     </>
//   ) : (
//     <Table variant="simple">
//       <Thead>
//         <Tr>
//           <Th>Account</Th>
//           <Th isNumeric>Bitcoin</Th>
//           <Th isNumeric>USD value</Th>
//           <Th>Edit</Th>
//         </Tr>
//       </Thead>
//       <Tbody>
// {accounts
//   .sort((a, b) => b.btcBalance - a.btcBalance)
//   .map((account) => (
//     <Tr key={account.id}>
//       <Td>{account.accountName}</Td>
//       <Td isNumeric>{formatNumber(account.btcBalance)}</Td>
//       <Td isNumeric>
//         {convertToUSD(
//           satsToBTC(account.btcBalance) * btcData.RAW.PRICE,
//         )}
//       </Td>
//       <Td>
//         <AccountForm
//           account={account}
//           btcData={btcData}
//           userId={userId}
//           onAccountSaved={onAccountSaved}
//         />
//       </Td>
//     </Tr>
//   ))}
//       </Tbody>
//     </Table>
//   )}
// </TableContainer>
