import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PaymentModal } from "./PaymentModal";

const Sidebar = () => {
  return (
    <Card className="w-full border-none  max-w-[32%]  p-4 shadow-xl ">
      <div className="sticky border-2 top-[100px]">
        <CardTitle className="text-[24px] mb-4 text-[#0f294d]">
          Price Details
        </CardTitle>
        <CardDescription className="flex items-center gap-x-2">
          <p className="text-[#8592a6] text-[14px]">All prices are in</p>{" "}
          <b>US dollars</b>
        </CardDescription>
        <CardContent className="w-full mb-3">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="w-full">
              <AccordionTrigger className="flex justify-between hover:no-underline">
                <p className="text-[#0f294d] font-semibold text-[14px]">
                  Tickets(1 Adult)
                </p>
                <p className="text-[#0f294d] font-semibold text-[14px]">174$</p>
              </AccordionTrigger>
              <AccordionContent className="border-b-0 flex flex-col gap-y-3">
                <AccordionItem
                  value="item-2"
                  className="w-full flex items-center justify-between border-b-0"
                >
                  <p className="text-[#0f294d] text-[14px]">
                    Adults (SHAXZOD ESHIMOV)
                  </p>
                  <p className="text-[#8592a6] text-[14px]">$172.50 x 1</p>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="w-full flex items-center justify-between border-b-0"
                >
                  <p className="text-[#8592a6] text-[14px]">Fare </p>
                  <p className="text-[#8592a6] text-[14px]">$134.00 x 1</p>
                </AccordionItem>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-6 w-full">
            <h4 className="mb-3 text-[#0f294d] font-semibold text-[14px]">
              Baggage
            </h4>
            <PaymentModal />
          </div>
        </CardContent>

        <CardFooter className="w-full flex items-start justify-between">
          <h4 className="text-[#0f294d] font-semibold text-[20px]">Total</h4>
          <span className="flex flex-col gap-y-2 items-end">
            <b className="text-[#3264ff] text-[20px]">$172.50</b>
            <button className="text-[#eb5600] text-[12px] bg-[#eb560035] px-2 rounded-[2px]">
              Trip Coins +44
            </button>
          </span>
        </CardFooter>
      </div>
    </Card>
  );
};

export default Sidebar;
