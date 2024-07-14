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
      <main>
      {children}
      <Sidebar />
      </main>
      <footer>
        <p>My Payment Page Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
