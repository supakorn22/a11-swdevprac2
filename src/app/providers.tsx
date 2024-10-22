// src/app/providers.tsx

"use client"; // Ensure this is a client component

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import ReduxProvider  from '@/redux/ReduxProvider';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return  <ReduxProvider>  <SessionProvider>{children}</SessionProvider>  </ReduxProvider>;
}
