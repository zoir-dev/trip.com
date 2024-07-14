import Layout from "@/components/payment/Layout";
import React from "react";
import { PrimeReactProvider } from "primereact/api";

const PaymentPage = () => {
  return (
    <PrimeReactProvider>
      <Layout>
        <div className="w-full max-w-[70%]">Payment</div>
      </Layout>
    </PrimeReactProvider>
  );
};

export default PaymentPage;
