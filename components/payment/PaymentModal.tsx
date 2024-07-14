import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger, // SheetClose komponentini import qiling
} from "@/components/ui/sheet";
import { Backpack, Check, Luggage, MicVocal } from "lucide-react";

import * as SheetPrimitive from "@radix-ui/react-dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
];

export function PaymentModal() {
  
  return (
    <Sheet>
      <SheetTrigger asChild className="w-full">
        <ul className="flex flex-col gap-y-3 w-full">
          <li  className="flex items-center justify-between">
            <Button variant="outline" className="text-perimary px-0 text-sm font-normal border-none hover:bg-[#fff] hover:text-primary" >Personal Item</Button>
            <p className="text-primary text-sm">Free</p>
          </li>
        </ul>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[50%] p-0 pb-8 overflow-auto scroll-smooth"
      >
        <SheetHeader className="w-full left-0 p-2 md:mb-6 mb-3 sticky top-0 bg-white shadow-md">
          <div className="flex items-center justify-between md:mb-4 mb-1">
            <SheetTitle className="md:text-lg sm:text-base text-sm h-full">Baggage Allowance & Policies</SheetTitle>
            <SheetPrimitive.Close className="mr-1 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
              <Cross2Icon className="md:h-5 md:w-5" />
              <span className="sr-only">Close</span>
            </SheetPrimitive.Close>
          </div>
          <ul className="flex items-center justify-between md:px-3 px-0 md:pb-2 pb-1">
            <li>
              <Link href="#bookingInformation" className="md:text-base text-xs hover:text-primary">
                Booking Information
              </Link>
            </li>
            <li>
              <Link href="#baggageAllowance" className="md:text-base text-xs hover:text-primary">
                Baggage Allowance
              </Link>
            </li>
            <li>
              <Link href="#flightCancellation" className="md:text-base text-xs hover:text-primary">
                Flight Cancellation
              </Link>
            </li>
          </ul>
        </SheetHeader>
        <div className="flex px-4 flex-col md:gap-y-6 gap-y-3">
          <div id="bookingInformation">
            <SheetTitle className="mb-3 md:text-lg text-base">Booking Information</SheetTitle>
            <ul className="flex flex-col border-[1px] border-gray-300 shadow-lg rounded-lg">
              <li className="flex gap-x-3 p-4 rounded-[6px]">
                <Check className="text-primary md:block hidden" />
                <div>
                  <h4 className="text-primary font-semibold mb-2">
                    Frequent Flyer Miles
                  </h4>
                  <p className="text-primary font-medium ">
                    Passengers with a standard frequent flyer membership will
                    earn approximately 634 miles/points.{" "}
                  </p>
                  <small className="text-[#8592a6] ">
                    *For reference only. Allocation of miles/points is dependent
                    on airline policy.
                  </small>
                  <div className="flex items-center gap-x-3">
                    <p className="text-[#8592a6] ">
                      Data provided by:
                    </p>
                    <b>30K</b>
                  </div>
                </div>
              </li>

              <li className="flex gap-x-3 p-4 rounded-[6px]">
                <Check className="text-primary md:block hidden" />
                <div>
                  <h4 className="text-primary font-semibold mb-2">
                    Ticket Issuing Time
                  </h4>
                  <p className="text-primary font-medium text-sm">
                    Once payment is confirmed, tickets will be issued within 2
                    hours.{" "}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div id="baggageAllowance">
            <SheetTitle className="mb-1">
              Baggage Allowance
            </SheetTitle>
            <p className="text-[#8592a6] mb-5 font-medium text-sm">
              The total weight of the personal item and carry-on baggage cannot
              exceed 10 kg
            </p>
            <ul className="flex flex-col border-[1px] border-gray-300 shadow-lg rounded-lg">
              <li className="flex gap-x-3 md:p-4 p-2">
                <Backpack className="text-primary mt-2 md:block hidden" />
                <div>
                  <h4 className="text-primary font-semibold mb-0">
                    Personal Item
                  </h4>
                  <p className="text-primary font-medium text-[15px]">
                    1 piece per person.
                  </p>
                  <p className="text-primary font-medium text-[15px]">
                    Must be placed under the seat in front of you
                  </p>
                </div>
              </li>
              <li className="flex gap-x-3 md:p-4 p-2">
                <Luggage className="text-primary md:block hidden" />
                <div>
                  <h4 className="text-primary font-semibold mb-1">
                    Carry-on Baggage
                  </h4>
                  <p className="text-primary font-medium text-[15px]">
                    1 piece per person.
                  </p>
                  <small className="text-[#8592a6] font-medium text-sm">
                    Each piece cannot exceed 20*55*40 cm in size. Total
                    dimensions (length + width + height) of each piece cannot
                    exceed 115 cm.
                  </small>
                </div>
              </li>
              <li className="flex gap-x-3 md:p-4 p-2 rounded-[6px]">
                <Luggage className="text-primary md:block hidden" />
                <span>
                  <h4 className="text-primary font-semibold mb-1">
                    Checked Baggage
                  </h4>
                  <p className="text-primary font-medium text-[15px]">
                    1 piece(s) per person, 23 kg per piece
                  </p>
                  <small className="text-[#8592a6] font-medium text-sm">
                    Total dimensions (length + width + height) of each piece
                    cannot exceed 158 cm.
                  </small>
                </span>
              </li>

              <li className="flex flex-col md:p-4 p-2">
                <div className="flex gap-x-3">
                  <MicVocal className="text-primary md:block hidden mb-2" />
                  <h4 className="text-primary font-semibold">
                    Regulations on Special Baggage Allowance
                  </h4>
                </div>
                <p className="text-[#8592a6] font-medium text-sm">
                  Each airline has different regulations on special baggage
                  (such as musical instruments, sports equipment, etc.).
                  Therefore, for baggage other than regular backpacks and
                  suitcases, we recommend checking the baggage regulations on
                  the airline is website or contacting our customer support
                  before traveling.
                </p>
              </li>
            </ul>
          </div>

          <div id="flightCancellation">
            <SheetTitle className="md:mb-4 mb-2 text-primary">
              Flight Cancellation & Change Policies
            </SheetTitle>

            <div className="border-[1px] shadow-md border-gray-300 rounded-lg p-4">
              <p className="text-primary font-medium text-sm">
                The ticket policy is subject to the rules listed below, and
                these might differ from policies listed on the airline is
                website. Any cancellation or change requests must be made
                through Trip.com platforms or to our customer support.
              </p>
            </div>

            <div className="md:mt-6 mt-3">
              <h4 className="text-primary font-medium text-sm">
                Cancellation Fee(Price per passenger)
              </h4>
              <Table className="mt-3 w-full">
                <TableHeader className="w-full">
                  <TableRow>
                    <TableHead className="w-[50%]">Request Time</TableHead>
                    <TableHead className="w-[50%]">Adult Tickets</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">
                        {invoice.paymentMethod}
                      </TableCell>
                      <TableCell>{invoice.totalAmount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="md:mt-6 mt-3">
              <h4 className="text-primary font-medium text-base">
                Change fee (within the same class)
              </h4>

              <div>
                <Table className="my-3 w-full">
                  <TableHeader className="w-full">
                    <TableRow>
                      <TableHead className="w-[50%] font-bold text-primary">
                        Request Time
                      </TableHead>
                      <TableHead className="w-[50%] font-bold text-primary">
                        Adult Tickets
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.paymentMethod}>
                        <TableCell className="font-medium">
                          {invoice.paymentMethod}
                        </TableCell>
                        <TableCell>{invoice.totalAmount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <b className="text-primary text-sm mb-2 block">
                  Additional Information
                </b>
                <p className="text-[#8592a6] font-medium text-sm">
                  When date/time changes result in a new ticket price which is
                  higher than the original ticket price, the difference must be
                  paid. According to the airline is policy, once a ticket has
                  been changed, the change fee that has already been paid is
                  non-refundable if any further changes are made.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
