"use client"
import React, { use, useContext, useEffect } from 'react'
import Header from './_components/Header';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '@/context/UserDeatilContext';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const createNewUser = useMutation(api.User.CreateNewUSer);
  const[userDetails, setUserDetails] = React.useState<any>(null);
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
      setUserDetails(result); 
    return result;
  };

  return (
    <UserDetailContext.Provider value={{userDetails, setUserDetails}}>
    <div>
      <Header />
      {children}
    </div>
    </UserDetailContext.Provider>
  );
}

export default Provider

export const useUserDetails = () => {
  return useContext(UserDetailContext);
}