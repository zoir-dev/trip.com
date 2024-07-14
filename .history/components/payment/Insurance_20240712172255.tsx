"use client";
import React from "react";
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
    <Card>
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
      <CardContent>
        <div>
          <span className="flex items-center justify-between">
            <CardTitle>Add Travel Protection From AXA</CardTitle>
            <span className="flex items-center gap-x-2">
              <p className="text-[#8592a6] text-[14px]">$33.00/person</p>
              <input type="checkbox" className="form-radio" />
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
              <FormField
                control={form.control}
                name="zipcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0f294d] text-[14px] border-[blue]">
                      Please enter your US zip code to review your State Specific Plan Document:
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
          </Form>
        </div>

        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
                    
                </form>
            </Form>
        </div>
      </CardContent>
    </Card>
  );
};

export default Insurance;
