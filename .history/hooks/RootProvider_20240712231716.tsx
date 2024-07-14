import React, { ReactNode } from 'react';
import { PromoCodeProvider } from '@/components/payment/PromoProvider';

interface AppProviderProps {
  children: ReactNode;
}

constAppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <PromoCodeProvider>
    {children}
    </PromoCodeProvider>
  );
};

export default AppProvider;
