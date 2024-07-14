import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Sidebar = () => {
  return (
    <Card className="w-full max-w-[32%] p-4">
      <CardTitle className="text-[24px] mb-4 text-[#0f294d]">Price Details</CardTitle>
      <CardDescription className="flex items-center gap-x-2"><p className="text-[#8592a6] text-[14px]">All prices are in</p> <b>US dollars</b></CardDescription>
      <CardContent className="w-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="w-full">
            <AccordionTrigger>
                <p>Tickets(1 Adult)</p>
                <p></p>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
