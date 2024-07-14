import React, { ReactNode } from 'react';
import { PromoCodeProvider } from '@/hooks/PromoProvider';

interface AppProviderProps {
  children: ReactNode;
}

const RootProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <PromoCodeProvider>
    {children}
    </PromoCodeProvider>
  );
};

export default RootProvider;
