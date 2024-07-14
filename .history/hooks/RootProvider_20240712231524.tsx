import React, { ReactNode } from 'react';
import { PromoCodeProvider } from '.';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <PromoCodeProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </PromoCodeProvider>
  );
};

export default AppProvider;
