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
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[50%]">
        <SheetHeader>
          <SheetTitle>Baggage Allowance & Policies</SheetTitle>
          <ul>
            <li>
                <a href="bookingInformation" className="hover:text-[#0f294d]">Booking Information</a>
            </li>
          </ul>
        </SheetHeader>
        <SheetContent>
            <div>
                <SheetTitle>Booking Information</SheetTitle>
                <ul>
                    <li>
                        <p>✅</p>
                    </li>
                </ul>
            </div>
        </SheetContent>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
