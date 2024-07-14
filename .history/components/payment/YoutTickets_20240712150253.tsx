import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SquarePercent } from "lucide-react";

const YoutTickets = () => {
  return (
    <>
      <Card className="mt-8 border-none">
        <CardHeader className={cn("flex items-center justify-between")}>
          <CardTitle className={cn("text-xl text-[#0f294d]")}>
            Yout Ticket(s)
          </CardTitle>
          <a href="#baggageAllowance" className="text-[#06aebd]">
            Details
          </a>
        </CardHeader>
        <CardContent className="flex items-center justify-between shadow-md">
          <div>
            <CardTitle className={cn("text-xl text-[#0f294d] mb-3")}>
              Baggage Allowance
            </CardTitle>
            <ul className="flex flex-col gap-y-2">
              <li className="flex items-center gap-x-1">
                <p>Carry-on Baggage:</p>
                <b>1 piece</b>
              </li>
              <li className="flex items-center gap-x-1">
                <p>Checked Baggage:</p>
                <b>1 × 23 kg</b>
              </li>
            </ul>
          </div>

          <div>
            <CardTitle className={cn("text-xl text-[#0f294d] mb-3")}>
              Policies
            </CardTitle>
            <ul className="flex flex-col gap-y-2">
              <li className="flex items-center gap-x-1">
                <p>*</p>
                <b className="text-[#0f294d] text-[14px] font-normal">
                  Cancellation Fee: From $86.00
                </b>
              </li>
              <li className="flex items-center gap-x-1">
                <p>*</p>
                <b className="text-[#0f294d] text-[14px] font-normal">
                  Change Fee: From $86.00
                </b>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <ul className="flex items-center gap-x-8 justify-between bg-slate-100 mt-8">
        <li className="flex items-center rounded-md gap-x-4 border-[1px] border-[#0f294d] p-4">
            <SquarePercent />
            <span>
                <h3 className="text-[#0f294d] font-bold mb-2">Ticket Issuing Time</h3>
                <p className="text-[#8592a6] text-[13px]">Once payment is confirmed, tickets will be issued within 2 days.</p>
            </span>
        </li>

        <li className="flex items-center rounded-md gap-x-4 border-[1px] border-[#0f294d] p-4">
            <SquarePercent />
            <span>
                <h3 className="text-[#0f294d] font-bold mb-2">Travel Worry-free</h3>
                <p className="text-[#8592a6] text-[13px]">With our service guarantee, you know we've always got your back! <a href="#" className="text-blue">View Details.</a></p>
            </span>
        </li>
      </ul>
    </>
  );
};

export default YoutTickets;
