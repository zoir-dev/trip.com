// components/payment/Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My Payment Page Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>My Payment Page Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
