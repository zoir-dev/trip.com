import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function PaymentModal() {
  return (
    <Sheet>
      <SheetTrigger asChild className="bg-[red]">
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[50%] bg-[#0f294d2d]">
        <SheetHeader className="mb-6">
          <SheetTitle>Baggage Allowance & Policies</SheetTitle>
          <ul className=" shadow-md pb-2">
            <li>
                <a href="bookingInformation" className="hover:text-[#0f294d]">Booking Information</a>
            </li>
          </ul>
        </SheetHeader>
        <div>
            <div className="">
                <SheetTitle>Booking Information</SheetTitle>
                <ul>
                    <li className="flex gap-x-3">
                        <p>✅</p>
                        <span>
                            <h4>Frequent Flyer Miles</h4>
                            <p>Passengers with a standard frequent flyer membership will earn approximately 634 miles/points. </p>
                            <small>*For reference only. Allocation of miles/points is dependent on airline policy.</small>
                            <span className="flex items-center gap-x-3">
                                <p>Data provided by:</p>
                                <b>30K</b>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
