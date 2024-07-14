import Layout from "@/components/payment/Layout";
import React from "react";
import { PrimeReactProvider } from "primereact/api";
import { Button } from "@/components/ui/button";

const PaymentPage = () => {
  return (
    <PrimeReactProvider>
      <Layout>
        <div className="w-full max-w-[68%]">
            <div className="mb-5">
               <span className=" flex items-center gap-x-5">
               <h2 className="text-[#0f294d] text-[36px] font-bold">Trip to Taipei</h2>
               <Button variant="outline" className="text-[#0f294d] px-[4px] rounded-[40%] text-[12px]">Change Flight</Button>
               </span>
            <div className="flex items-center gap-x-4 h-[30px]">
                <span className=" bg-[blue] text-white px-2 py-1 rounded-md">Depart</span>
                <span className="text-[#252b31] text-[14px] font-medium">Sat, Oct 5</span>
                <span className="h-[100%] w-[1px] bg-gray-500"></span>
                <span className="text-[#252b31] text-[14px] font-medium">Duration 2h 40m</span>
            </div>
            </div>

        </div>
      </Layout>
    </PrimeReactProvider>
  );
};

export default PaymentPage;
