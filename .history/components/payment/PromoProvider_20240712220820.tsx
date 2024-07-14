import React, { createContext, useState, useContext } from 'react';

const PromoCodeContext = createContext();

export const usePromoCode = () => useContext(PromoCodeContext);

export const PromoCodeProvider = ({ children }) => {
  const [promoCode, setPromoCode] = useState({ zipcode: '' });

  return (
    <PromoCodeContext.Provider value={{ promoCode, setPromoCode }}>
      {children}
    </PromoCodeContext.Provider>
  );
};
