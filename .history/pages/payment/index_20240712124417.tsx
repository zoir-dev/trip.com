import Layout from "@/components/payment/Layout";
import React from "react";
import { PrimeReactProvider } from "primereact/api";

const PaymentPage = () => {
  return (
    <PrimeReactProvider>
      <Layout>
        <div className="w-full max-w-[68%]">
            <div>
                <h2>Trip to Taipei</h2>
            </div>
        </div>
      </Layout>
    </PrimeReactProvider>
  );
};

export default PaymentPage;
