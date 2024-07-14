import Layout from "@/components/payment/Layout";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import YoutTickets from "@/components/payment/YoutTickets";
import Compensation from "@/components/payment/Compensation";
import Insurance from "@/components/payment/Insurance";
import Discounts from "@/components/payment/Discounts";
import ContactDetails from "@/components/payment/ContactDetails";
import PromoCodes from "@/components/payment/PromoCodes";
import RootProvider from "@/hooks/RootProvider";
import TotalPrice from "@/components/payment/TotalPrice";
import TravelingForm from "@/components/payment/Traveling";
import Link from "next/link";

const PaymentPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <RootProvider>
      <Layout>
        <div className="w-full max-w-[68%]">
          <div>
            <div className=" flex items-center gap-x-5">
              <h2 className="text-primary text-4xl font-bold">
                Trip to Taipei
              </h2>
              <Link
                href="/"
                className="text-primary bg-slate-200 px-2 border-slate-200 border-[1px] hover:border-primary rounded-[30px] text-xs"
              >
                Change Flight
              </Link>
            </div>
            <div className="flex items-center gap-x-4 h-[30px] mt-6">
              <span className=" bg-primary text-white px-2 py-1 rounded-md">
                Depart
              </span>
              <span className="text-sm font-medium">
                Sat, Oct 5
              </span>
              <span className="h-full w-[1px] bg-gray-500"></span>
              <span className="text-sm font-medium">
                Duration 2h 40m
              </span>
            </div>

            <div className="mt-6">
              <ul className="flex flex-col gap-y-3">
                <li className="flex items-center gap-x-8">
                  <span>10:30</span>
                  <h4 className="text-primary font-bold">
                    ICN Seoul Incheon International AirportT2
                  </h4>
                </li>
                <li className="flex items-center gap-x-8">
                  <Image
                    width={16}
                    height={16}
                    className="w-4 h-4 text-center mr-6"
                    src="https://static.tripcdn.com/packages/flight/airline-logo/latest/airline_logo/3x/ke.webp"
                    alt=""
                  />
                  <h4 className="text-sm">
                    Korean AirKE185 Boeing 777-300 Economy class
                  </h4>
                </li>
                <li className="flex items-center gap-x-8">
                  <span>12:10</span>
                  <h4 className="text-primary font-bold">
                    TPE Taipei Taiwan Taoyuan International AirportT1
                  </h4>
                </li>
              </ul>
            </div>

            <YoutTickets />
            <TravelingForm />
            <Compensation />
            <Insurance />
            <Discounts />
            <ContactDetails />
            <PromoCodes />
            <TotalPrice />
          </div>
        </div>
      </Layout>
    </RootProvider>
  );
};

export default PaymentPage;
