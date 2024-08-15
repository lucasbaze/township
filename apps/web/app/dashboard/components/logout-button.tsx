'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@chakra-ui/react';
import { createClient } from '../../../utils/supabase/client';

export const LogoutButton = () => {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    } else {
      router.push('/login'); // Redirect to login page after logout
    }
  };

  return (
    <Button onClick={handleLogout} variant="primary" isLoading={loading}>
      Logout
    </Button>
  );
};
