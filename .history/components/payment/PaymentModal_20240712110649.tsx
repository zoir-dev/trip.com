import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Backpack, Check, Luggage, MicVocal } from "lucide-react";

export function PaymentModal() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[50%] overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle>Baggage Allowance & Policies</SheetTitle>
          <ul className=" shadow-md pb-2">
            <li>
              <a href="#bookingInformation" className="hover:text-[#0f294d]">
                Booking Information
              </a>
            </li>
            <li>
              <a href="#bookingInformation" className="hover:text-[#0f294d]">
                Booking Information
              </a>
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
                  <h4 className="text-[#0f294d] font-semibold mb-2">
                    Frequent Flyer Miles
                  </h4>
                  <p className="text-[#0f294d] font-medium text-[14px]">
                    Passengers with a standard frequent flyer membership will
                    earn approximately 634 miles/points.{" "}
                  </p>
                  <small className="text-[#8592a6]">
                    *For reference only. Allocation of miles/points is dependent
                    on airline policy.
                  </small>
                  <span className="flex items-center gap-x-3">
                    <p className="text-[#8592a6] text-[14px]">
                      Data provided by:
                    </p>
                    <b>30K</b>
                  </span>
                </span>
              </li>

              <li className="flex gap-x-3 p-4 rounded-[6px]">
                <Check className="text-[#05939f]" />
                <span>
                  <h4 className="text-[#0f294d] font-semibold mb-2">
                    Ticket Issuing Time
                  </h4>
                  <p className="text-[#0f294d] font-medium text-[14px]">
                    Once payment is confirmed, tickets will be issued within 2
                    hours.{" "}
                  </p>
                </span>
              </li>
            </ul>
          </div>

          <div id="baggageAllowance">
            <SheetTitle className="mb-1 text-[#0f294d]">
              Baggage Allowance
            </SheetTitle>
            <p className="text-[#8592a6] mb-5 font-medium text-[14px]">
              The total weight of the personal item and carry-on baggage cannot
              exceed 10 kg
            </p>
            <ul className="flex flex-col border-[1px] border-gray-300 shadow-lg rounded-lg">
              <li className="flex gap-x-3 p-4 rounded-[6px]">
                <Backpack className="text-[#05939f] mt-2 " />
                <span>
                  <h4 className="text-[#0f294d] font-semibold mb-0">
                  Personal Item
                  </h4>
                  <p className="text-[#0f294d] font-medium text-[15px]">
                    1 piece per person.
                  </p>
                  <p className="text-[#0f294d] font-medium text-[15px]">
                    Must be placed under the seat in front of you
                  </p>
                </span>
              </li>
              <li className="flex gap-x-3 p-4 rounded-[6px]">
                <Luggage className="text-[#05939f]" />
                <span>
                  <h4 className="text-[#0f294d] font-semibold mb-1">
                  Carry-on Baggage
                  </h4>
                  <p className="text-[#0f294d] font-medium text-[15px]">
                  1 piece per person.
                  </p>
                  <small className="text-[#8592a6] font-medium text-[14px]">
                  Each piece cannot exceed 20*55*40 cm in size. Total dimensions (length + width + height) of each piece cannot exceed 115 cm.
                  </small>
                </span>
              </li>
              <li className="flex gap-x-3 p-4 rounded-[6px]">
                <Luggage className="text-[#05939f]" />
                <span>
                  <h4 className="text-[#0f294d] font-semibold mb-1">
                  Checked Baggage
                  </h4>
                  <p className="text-[#0f294d] font-medium text-[15px]">
                  1 piece(s) per person, 23 kg per piece
                  </p>
                  <small className="text-[#8592a6] font-medium text-[14px]">
                  Total dimensions (length + width + height) of each piece cannot exceed 158 cm.
                  </small>
                </span>
              </li>

              <li className="flex flex-col p-4">
                <span className="flex gap-x-3">
                <MicVocal className="text-[#05939f] mb-2" />
                <h4 className="text-[#0f294d] font-semibold">Regulations on Special Baggage Allowance</h4>
                </span>
                <p className="text-[#8592a6] font-medium text-[14px]">Each airline has different regulations on special baggage (such as musical instruments, sports equipment, etc.). Therefore, for baggage other than regular backpacks and suitcases, we recommend checking the baggage regulations on the airline's website or contacting our customer support before traveling.</p>
              </li>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
