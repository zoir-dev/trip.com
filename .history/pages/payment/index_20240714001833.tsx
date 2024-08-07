import Layout from "@/components/payment/Layout";
import React from "react";
import { Button } from "@/components/ui/button";
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
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

const PaymentPage = () => {

 const t = useTranslations('Payment')

  return (
    <RootProvider>
      <Layout>
        <div className="w-full max-w-[68%]">
          <div>
            <span className=" flex items-center gap-x-5">
              <h2 className="text-[#0f294d] text-[36px] font-bold">
                Trip to Taipei
              </h2>
              <a
                href="/"
                className="text-[#3264ff] bg-slate-200 px-[7px] border-slate-200 border-[1px] hover:border-[#3264ff] rounded-[30px] text-[12px]"
              >
                Change Flight
              </a>
            </span>
            <div className="flex items-center gap-x-4 h-[30px] mt-6">
              <span className=" bg-[blue] text-white px-2 py-1 rounded-md">
                Depart
              </span>
              <span className="text-[#252b31] text-[14px] font-medium">
                Sat, Oct 5
              </span>
              <span className="h-[100%] w-[1px] bg-gray-500"></span>
              <span className="text-[#252b31] text-[14px] font-medium">
                Duration 2h 40m
              </span>
            </div>

            <div className="mt-6">
              <ul className="flex flex-col gap-y-3">
                <li className="flex items-center gap-x-8">
                  <span>10:30</span>
                  <h4 className="text-[#0f294d] font-bold">
                    ICN Seoul Incheon International AirportT2
                  </h4>
                </li>
                <li className="flex items-center gap-x-8">
                  <Image
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px] text-center mr-6"
                    src="https://static.tripcdn.com/packages/flight/airline-logo/latest/airline_logo/3x/ke.webp"
                    alt=""
                  />
                  <h4 className="text-[#252b31] text-[14px]">Korean AirKE185 Boeing 777-300 Economy class</h4>
                </li>
                <li className="flex items-center gap-x-8">
                  <span>12:10</span>
                  <h4 className="text-[#0f294d] font-bold">
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

export const getStaticProps = (async (context) => {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default,
    },
  };
}) satisfies GetStaticProps;
