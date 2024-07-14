import Layout from "@/components/payment/Layout";
import React from "react";
import { PrimeReactProvider } from "primereact/api";
import { Button } from "@/components/ui/button";

const PaymentPage = () => {
  return (
    <PrimeReactProvider>
      <Layout>
        <div className="w-full max-w-[68%]">
            <div>
               <span className="w-[] flex items-center justify-between">
               <h2>Trip to Taipei</h2>
               <Button>Change Flight</Button>
               </span>
            </div>
        </div>
      </Layout>
    </PrimeReactProvider>
  );
};

export default PaymentPage;
