"use client"
import React, { useEffect } from 'react'
import Header from './_components/Header';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const createNewUser = useMutation(api.User.CreateNewUSer);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      handleCreateUser();
    }
  }, [user, createNewUser]);

  const handleCreateUser = async () => {
    if (!user) return;
    // Save new user if not exists
    const result = await createNewUser({
      email: user?.primaryEmailAddress?.emailAddress ?? '',
      imageUrl: user?.imageUrl ?? '',
      name: user?.fullName ?? '',
      subscription: ''
    });
    return result;
  };

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Provider