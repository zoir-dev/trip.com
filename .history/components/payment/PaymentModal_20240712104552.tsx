import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Check, Luggage } from "lucide-react";

export function PaymentModal() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[50%]">
        <SheetHeader className="mb-6">
          <SheetTitle>Baggage Allowance & Policies</SheetTitle>
          <ul className=" shadow-md pb-2">
            <li>
                <a href="#bookingInformation" className="hover:text-[#0f294d]">Booking Information</a>
            </li>
          </ul>
        </SheetHeader>
        <div className="flex flex-col gap-y-6">
            <div id="bookingInformation">
                <SheetTitle className="mb-3">Booking Information</SheetTitle>
                <ul className="flex flex-col border-[1px] border-gray-300 shadow-lg rounded-lg">
                    <li className="flex gap-x-3 p-4 rounded-[6px]">
                    <Check className="text-[#05939f]" />
                        <span>
                            <h4 className="text-[#0f294d] font-semibold mb-2">Frequent Flyer Miles</h4>
                            <p className="text-[#0f294d] font-medium text-[14px]">Passengers with a standard frequent flyer membership will earn approximately 634 miles/points. </p>
                            <small className="text-[#8592a6]">*For reference only. Allocation of miles/points is dependent on airline policy.</small>
                            <span className="flex items-center gap-x-3">
                                <p className="text-[#8592a6] text-[14px]">Data provided by:</p>
                                <b>30K</b>
                            </span>
                        </span>
                    </li>

                    <li className="flex gap-x-3 p-4 rounded-[6px]">
                    <Check className="text-[#05939f]" />
                        <span>
                            <h4 className="text-[#0f294d] font-semibold mb-2">Ticket Issuing Time</h4>
                            <p className="text-[#0f294d] font-medium text-[14px]">Once payment is confirmed, tickets will be issued within 2 hours. </p>
                        </span>
                    </li>
                </ul>
            </div>

            <div id="bookingInformation">
                <SheetTitle className="mb-3 text-[#0f294d]">Baggage Allowance</SheetTitle>
                <p>The total weight of the personal item and carry-on baggage cannot exceed 10 kg</p>
                <ul className="flex flex-col border-[1px] border-gray-300 shadow-lg rounded-lg">
                    <li className="flex gap-x-3 p-4 rounded-[6px]">
                    <Luggage className="text-[#05939f]" />
                        <span>
                            <h4 className="text-[#0f294d] font-semibold mb-2">Frequent Flyer Miles</h4>
                            <p className="text-[#0f294d] font-medium text-[14px]">Passengers with a standard frequent flyer membership will earn approximately 634 miles/points. </p>
                            <small className="text-[#8592a6]">*For reference only. Allocation of miles/points is dependent on airline policy.</small>
                            <span className="flex items-center gap-x-3">
                                <p className="text-[#8592a6] text-[14px]">Data provided by:</p>
                                <b>30K</b>
                            </span>
                        </span>
                    </li>

                    <li className="flex gap-x-3 p-4 rounded-[6px]">
                    <Check className="text-[#05939f]" />
                        <span>
                            <h4 className="text-[#0f294d] font-semibold mb-2">Ticket Issuing Time</h4>
                            <p className="text-[#0f294d] font-medium text-[14px]">Once payment is confirmed, tickets will be issued within 2 hours. </p>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
