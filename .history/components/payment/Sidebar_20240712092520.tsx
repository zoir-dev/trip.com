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
    <Card className="w-full max-w-[32%]">
      <CardTitle>Price Details</CardTitle>
      <CardDescription>All prices are in US dollars</CardDescription>
      <CardContent className="p-3">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="p-3">
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