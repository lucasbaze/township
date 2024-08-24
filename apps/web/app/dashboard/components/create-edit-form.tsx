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
import { EditIcon } from '@chakra-ui/icons';
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
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleSave = async () => {
    setSaving(true);
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

    setSaving(false);
    onClose();
    onAccountSaved(); // Callback to refresh the data on the server-side component
  };

  const handleDelete = async () => {
    if (!account || !account.id) return;
    setDeleting(true);

    const response = await fetch(`/api/btc-accounts?id=${account.id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const { error } = await response.json();
      console.error('Failed to delete:', error);
    } else {
      console.log('Delete success');
    }

    setDeleting(false);
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

  const formatNumberWithCommas = (value: number) => {
    return value.toLocaleString('en-US');
  };

  const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, ''); // Remove commas
    const numericValue = parseInt(rawValue, 10) || 0;
    if (!isNaN(numericValue)) {
      setNewAccountBalance(numericValue);
    }
  };

  return (
    <>
      <Button colorScheme="orange" onClick={handleOpen} variant="ghost">
        {account ? <EditIcon /> : 'Log New Account'}
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
              <FormLabel>Bitcoin Balance (in sats)</FormLabel>
              <Input
                value={formatNumberWithCommas(newAccountBalance)}
                onChange={handleBalanceChange}
                type="text"
                placeholder="Enter BTC balance"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            {account && (
              <Button
                colorScheme="red"
                mr={3}
                onClick={handleDelete}
                isLoading={deleting}
              >
                Delete
              </Button>
            )}
            <Button colorScheme="blue" onClick={handleSave} isLoading={saving}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};