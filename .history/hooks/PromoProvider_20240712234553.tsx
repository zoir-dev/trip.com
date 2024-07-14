import React, { createContext, useState, useContext, ReactNode } from 'react';

interface PromoCode {
  zipcode: string;
}

interface PromoCodeContextProps {
  promoCode: PromoCode;
  setPromoCode: (promoCode: PromoCode) => void;
  onSubmit: SubmitHandler<PromoCode>; // SubmitHandler<PromoCode> dan foydalanish
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

  const onSubmit: SubmitHandler<PromoCode> = (values) => {
    setPromoCode(values);
  };

  return (
    <PromoCodeContext.Provider value={{ promoCode, setPromoCode, onSubmit }}>
      {children}
    </PromoCodeContext.Provider>
  );
};