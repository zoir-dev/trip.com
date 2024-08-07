"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Check, Sticker } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// 5 xonali faqat raqamlar uchun validatsiya qoidasi
const formSchema = z.object({
  zipcode: z.string().max(5).min(5).regex(/^\d{5}$/, {
    message: "Zip code must be exactly 5 digits.",
  }),
});

const Insurance = () => {
  const [isInsuranceChecked, setIsInsuranceChecked] = useState(false);
  const [isNoProtectionChecked, setIsNoProtectionChecked] = useState(false);

  const handleInsuranceChange = () => {
    setIsInsuranceChecked(!isInsuranceChecked);
    if (!isInsuranceChecked) {
      setIsNoProtectionChecked(false);
    }
  };

  const handleNoProtectionChange = () => {
    setIsNoProtectionChecked(!isNoProtectionChecked);
    if (!isNoProtectionChecked) {
      setIsInsuranceChecked(false);
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      zipcode: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="border-none w-full">
      <CardHeader className="flex justify-between gap-x-4 ">
        <div className="flex flex-col gap-y-1">
          <CardTitle className="text-[#0f294d] text-xl ">
            Trip.com Travel Insurance
          </CardTitle>
          <p className="text-[#8592a6] text-[14px] p-0">
            Protect Your Journey With Travel Insurance
          </p>
        </div>
        <Sticker />
      </CardHeader>
      <CardContent className="w-full">
        <div className="">
          <span className="flex items-center justify-between">
            <CardTitle>Add Travel Protection From AXA</CardTitle>
            <span className="flex items-center gap-x-2">
              <p className="text-[#8592a6] text-[14px]">$33.00/person</p>
              <input
                type="checkbox"
                name="travel"
                className="form-radio"
                checked={isInsuranceChecked}
                onChange={handleInsuranceChange}
              />
            </span>
          </span>
          <ul className="flex flex-col gap-y-1 mt-5">
            <li className="flex items-center gap-x-2">
              <Check className="text-[#06aebd]" />
              <span className="text-[#0f294d] text-[14px] flex items-center gap-x-2">
                Trip Cancellation and Interruption Coverage - up to{" "}
                <p className="text-[#06aebd]">
                  {" "}
                  100% of trip cost (max. $10,000 per person)
                </p>
              </span>
            </li>
            <li className="flex items-center gap-x-2">
              <Check className="text-[#06aebd]" />
              <span className="text-[#0f294d] text-[14px] flex items-center gap-x-2">
                Trip Cancellation and Interruption Coverage - up to{" "}
                <p className="text-[#06aebd]">
                  {" "}
                  100% of trip cost (max. $10,000 per person)
                </p>
              </span>
            </li>
            <li className="flex items-center gap-x-2">
              <Check className="text-[#06aebd]" />
              <span className="text-[#0f294d] text-[14px] flex items-center gap-x-2">
                Trip Cancellation and Interruption Coverage - up to{" "}
                <p className="text-[#06aebd]">
                  {" "}
                  100% of trip cost (max. $10,000 per person)
                </p>
              </span>
            </li>
            <li className="flex items-center gap-x-2">
              <Check className="text-[#06aebd]" />
              <span className="text-[#0f294d] text-[14px] flex items-center gap-x-2">
                Trip Cancellation and Interruption Coverage - up to{" "}
                <p className="text-[#06aebd]">
                  {" "}
                  100% of trip cost (max. $10,000 per person)
                </p>
              </span>
            </li>
          </ul>

         {isInsuranceChecked ?  <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mt-8"
            >
              <FormField
                control={form.control}
                name="zipcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0f294d] text-[14px] border-[blue]">
                      Please enter your US zip code to review your State
                      Specific Plan Document:
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter zip code" {...field} />
                    </FormControl>
                    <FormDescription className="text-[red]">
                      Please enter a 5-digit US zip code
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <Button type="submit">Submit</Button> */}
            </form>
          </Form> : null}

        </div>

        <div className="flex shadow-md w-full justify-between mt-8">
          <span>
            <h4 className="text-[#0f294d] text-[14px] font-bold mb-2">No Protection</h4>
            <p className="text-[#8592a6] text-[14px] mb-2">I understand the risks of traveling without insurance</p>

            <p className="text-[#eb5600] text-[14px]">
              You won't be able to add insurance once your booking is complete
            </p>
          </span>

          <input
            type="checkbox"
            name="no-protection"
            checked={isNoProtectionChecked}
            onChange={handleNoProtectionChange}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Insurance;
