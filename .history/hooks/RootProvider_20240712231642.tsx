import React, { ReactNode } from 'react';
import { PromoCodeProvider } from '@/components/payment/PromoProvider';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <PromoCodeProvider>
        {children}
      </UserProvider>
    </PromoCodeProvider>
  );
};

export default AppProvider;
