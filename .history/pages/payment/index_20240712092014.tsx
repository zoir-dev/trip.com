import Layout from "@/components/payment/Layout";
import React from "react";
import { PrimeReactProvider } from "primereact/api";

const PaymentPage = () => {
  return (
    <PrimeReactProvider>
      <Layout>
        <div></div>
      </Layout>
    </PrimeReactProvider>
  );
};

export default PaymentPage;
