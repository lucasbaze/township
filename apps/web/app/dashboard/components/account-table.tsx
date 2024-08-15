'use client';

import React, { useEffect, useState } from 'react';
import {
  Table,
  TableContainer,
  Th,
  Tr,
  Td,
  Thead,
  Tbody,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Spinner,
} from '@chakra-ui/react';
import crypto from 'crypto-js';
import { createClient } from '../../../utils/supabase/client';
import { convertToUSD, satsToBTC } from '../../../utils';
import { AccountForm } from './create-edit-form';

interface rawAccount {
  id: string;
  account_name: string;
  btc_balance: string;
}

interface Account {
  id: string;
  accountName: string;
  btcBalance: number;
}

interface AccountTableProps {
  userId: string;
  btcData: any;
}

const decryptAcccount = (account: rawAccount): Account => {
  const btcBalance = parseInt(
    crypto.AES.decrypt(account.btc_balance, 'client_secret').toString(
      crypto.enc.Utf8,
    ),
    10,
  );

  const accountName = crypto.AES.decrypt(
    account.account_name,
    'client_secret',
  ).toString(crypto.enc.Utf8);

  return {
    id: account.id,
    accountName,
    btcBalance,
  };
};

export const AccountTable: React.FC<AccountTableProps> = ({
  userId,
  btcData,
}) => {
  const [accounts, setAccounts] = useState<Account[] | null>(null);
  const supabase = createClient();

  const fetchAccounts = async () => {
    const { data: accounts, error } = await supabase
      .from('btc_accounts')
      .select('*')
      .eq('user_id', userId);

    if (error) {
      console.error(error.message);
    } else {
      const transformedAccounts = accounts.map(decryptAcccount);
      setAccounts(transformedAccounts || []);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  // const totalAccountBalance = accounts?.reduce(account => );

  if (!accounts) {
    return <Spinner />;
  }

  return (
    <>
      <AccountForm
        btcData={btcData}
        userId={userId}
        onAccountSaved={fetchAccounts}
      />
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
      <TableContainer>
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
                    onAccountSaved={fetchAccounts}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
