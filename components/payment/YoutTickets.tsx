import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SquarePercent } from "lucide-react";
import Link from "next/link";

const YoutTickets = () => {
  return (
    <>
      <Card className="mt-8 border-none">
        <CardHeader className={cn("flex items-center justify-between")}>
          <CardTitle className={cn("text-xl text-primary")}>
            Yout Ticket(s)
          </CardTitle>
          <Link href="#baggageAllowance" className="text-primary/90">
            Details
          </Link>
        </CardHeader>
        <CardContent className="flex items-center justify-between shadow-md">
          <div>
            <CardTitle className={cn("text-xl text-primary mb-3")}>
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
            <CardTitle className={cn("text-xl text-primary mb-3")}>
              Policies
            </CardTitle>
            <ul className="flex flex-col gap-y-2">
              <li className="flex items-center gap-x-1">
                <p className="text-primary/90">*</p>
                <b className="text-primary/90 text-sm font-normal">
                  Cancellation Fee: From $86.00
                </b>
              </li>
              <li className="flex items-center gap-x-1">
                <p>*</p>
                <b className="text-primary text-sm font-normal">
                  Change Fee: From $86.00
                </b>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <ul className="flex items-center gap-x-8 justify-between bg-slate-100 mt-8">
        <li className="flex items-center rounded-md gap-x-4 border p-4">
            <SquarePercent />
            <div>
                <h3 className="text-primary font-bold mb-2">Ticket Issuing Time</h3>
                <p className=" text-[13px]">Once payment is confirmed, tickets will be issued within 2 days.</p>
            </div>
        </li>

        <li className="flex items-center rounded-md gap-x-4 border p-4">
            <SquarePercent />
            <div>
                <h3 className="text-primary font-bold primary mb-2">Travel Worry-free</h3>
                <p className=" text-[13px]">With our service guarantee, you know we have always got your back! <Link href="#" className="text-primary">View Details.</Link></p>
            </div>
        </li>
      </ul>
    </>
  );
};

export default YoutTickets;
