import React, { useState } from "react";
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
import { Cross2Icon } from "@radix-ui/react-icons";



    const [isOpen, setIsOpen] = useState(false);
  
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
}

const Sidebar = () => {
  return (
    <Card className="w-full max-w-[32%] p-4 shadow-xl ">
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

          <div>
            {/* Trigger button */}
            <button onClick={toggleModal}>Open Modal</button>

            {/* Modal */}
            <div
              className={`fixed inset-0 z-50 bg-black/80 ${
                isOpen
                  ? "data-[state=open]:fade-in-0"
                  : "data-[state=closed]:fade-out-0"
              }`}
            >
              <div className="fixed inset-0 flex items-center justify-center">
                <div className="w-[80%] max-w-lg bg-white p-6 rounded-lg shadow-lg transition-opacity">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Modal Title</h2>
                    <button
                      onClick={toggleModal}
                      className="p-2 rounded-full hover:bg-gray-200"
                    >
                      <Cross2Icon className="h-5 w-5" />
                    </button>
                  </div>
                  <p>Modal content goes here...</p>
                </div>
              </div>
            </div>
          </div>
        </span>
      </CardFooter>
    </Card>
  );
};

export default Sidebar;
