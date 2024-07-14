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
  zipcode: z
    .string()
    .max(5)
    .min(5)
    .regex(/^\d{5}$/, {
      message: "Zip code must be exactly 5 digits.",
    }),
});

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    zipcode: "",
  },
});

const PromoCodes = () => {

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
      }

  return (
    <Card>
        <CardTitle className="text-xl text-[#0f294d] mb-6">Promo Codes</CardTitle>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <FormField
            control={form.control}
            name="zipcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#0f294d] text-[14px] border-[blue]">
                  Please enter your US zip code to review your State Specific
                  Plan Document:
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
    </Card>
  );
};

export default PromoCodes;
