import React, { createContext, useState, useContext, ReactNode } from 'react';

interface PromoCode {
  zipcode: string;
}

interface PromoCodeContextProps {
  promoCode: PromoCode;
  setPromoCode: (promoCode: PromoCode) => void;
}

const PromoCodeContext = createContext<PromoCodeContextProps | undefined>(undefined);

export const usePromoCode = (): PromoCodeContextProps => {
  const context = useContext(PromoCodeContext);
  if (!context) {
    throw new Error('usePromoCode must be used within a PromoCodeProvider');
  }
  return context;
};

interface PromoCodeProviderProps {
  children: ReactNode;
}

export const PromoCodeProvider: React.FC<PromoCodeProviderProps> = ({ children }) => {
  const [promoCode, setPromoCode] = useState<PromoCode>({ zipcode: '' });

  return (
    <PromoCodeContext.Provider value={{ promoCode, setPromoCode }}>
      {children}
    </PromoCodeContext.Provider>
  );
};
