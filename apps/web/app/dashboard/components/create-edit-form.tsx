'use client';

import React, { useState } from 'react';
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { encryptClientValue } from '../../../lib/security/account-values';

interface AccountFormProps {
  account?: {
    id: string;
    accountName: string;
    btcBalance: number;
  };
  btcData: any;
  userId: string;
  onAccountSaved: () => void;
}

export const AccountForm: React.FC<AccountFormProps> = ({
  account,
  btcData,
  userId,
  onAccountSaved,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newAccountName, setNewAccountName] = useState('');
  const [newAccountBalance, setNewAccountBalance] = useState(0);

  const handleSave = async () => {
    const encryptedName = encryptClientValue(newAccountName);
    const encryptedBalance = encryptClientValue(newAccountBalance.toString());

    const action = account ? 'update' : 'insert';
    const payload = {
      action,
      accountId: account?.id,
      userId,
      account_name: encryptedName,
      btc_balance: encryptedBalance,
    };

    const response = await fetch('/api/btc-accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const { error } = await response.json();
      console.error('Failed:', error);
    } else {
      console.log('Success');
    }

    onClose();
    onAccountSaved(); // Callback to refresh the data on the server-side component
  };

  const handleOpen = () => {
    if (account) {
      setNewAccountName(account.accountName);
      setNewAccountBalance(account.btcBalance);
    }
    onOpen();
  };

  return (
    <>
      <Button colorScheme="blue" onClick={handleOpen}>
        {account ? 'Edit' : 'Log New Account'}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{account ? 'Edit Account' : 'New Account'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="account-name" mb={4} isRequired>
              <FormLabel>Account Name</FormLabel>
              <Input
                value={newAccountName}
                onChange={(e) => setNewAccountName(e.target.value)}
                placeholder="Enter account name"
              />
            </FormControl>
            <FormControl id="btc-balance" mb={4} isRequired>
              <FormLabel>Bitcoin Balance</FormLabel>
              <Input
                value={newAccountBalance}
                onChange={(e) =>
                  setNewAccountBalance(parseInt(e.target.value, 10))
                }
                type="number"
                placeholder="Enter BTC balance"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSave}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
