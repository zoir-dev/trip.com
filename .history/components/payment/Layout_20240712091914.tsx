// components/payment/Layout.tsx
import React, { ReactNode } from 'react';
import PaymentStipper from './PaymentStipper';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <PaymentStipper />
      <main className='w-[80%] mx-auto flex px-6 mt-8 gap-x-6'>
        {children}
        <Sidebar />
      </main>
    </div>
  );
};

export default Layout;
