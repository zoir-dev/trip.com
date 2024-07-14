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
               <span className=" flex items-center gap-5">
               <h2 className="text-[#0f294d] text-[36px] font-bold">Trip to Taipei</h2>
               <Button variant="outline" className="text-[#0f294d] px-[4px] rounded-[40%] text-[12px]">Change Flight</Button>
               </span>
            </div>
        </div>
      </Layout>
    </PrimeReactProvider>
  );
};

export default PaymentPage;
