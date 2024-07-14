// components/payment/Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <PaymentStipper
      <main>{children}</main>
      <footer>
        <p>My Payment Page Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
