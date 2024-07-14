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
      <CardDescription><p>All prices are in</p> dollars</CardDescription>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Tickets(1 Adult)</AccordionTrigger>
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
