import React, { ReactNode } from 'react';
import { PromoCodeProvider } from './PromoCodeContext';
import { UserProvider } from './UserContext';

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
