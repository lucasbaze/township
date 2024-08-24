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
import { formatNumberWithCommas } from '../../../lib/ui-utils/formatting';
import { satsToBTC, BTCtoSats } from '../../../utils';

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
  const [newAccountBalance, setNewAccountBalance] = useState('');
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    const encryptedName = encryptClientValue(newAccountName);
    const satoshis = Math.round(
      parseFloat(newAccountBalance) * 100000000,
    ).toString();
    const encryptedBalance = encryptClientValue(satoshis);

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
      setNewAccountBalance(satsToBTC(account.btcBalance).toString());
    }
    onOpen();
  };

  const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and one decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setNewAccountBalance(value);
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant={account ? 'ghost' : 'smallPrimary'}
        size="sm"
      >
        {account ? <EditIcon /> : 'New Account'}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="sm">
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
                onChange={handleBalanceChange}
                type="text"
                placeholder="Enter BTC balance (e.g., 0.12345)"
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
