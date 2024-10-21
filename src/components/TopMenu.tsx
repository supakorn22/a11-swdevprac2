"use client"; // Mark this as a client component

import React from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import TopMenuItem from './TopMenuItem';

const TopMenu: React.FC = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="flex items-center">
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : session ? (
          <Link href="/api/auth/signout?callbackUrl=/" passHref>
            <p className="text-white hover:underline">Sign-Out</p>
          </Link>
        ) : (
          <Link href="/api/auth/signin?callbackUrl=/" passHref>
            <p className="text-white hover:underline">Sign-In</p>
          </Link>
        )}
      </div>

      <div className="flex space-x-4">
        <TopMenuItem label="Booking" href="/booking" />
        <img src="/img/medical/medical3_640.png" alt="Logo" className="h-12" />
      </div>
    </nav>
  );
};

export default TopMenu;
