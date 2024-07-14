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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { usePromoCode } from "./PromoProvider";

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

const PromoCodes = () => {

  const a = usePromoCode();

  
  
  
  // console.log(setPromoCodes);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      zipcode: "",
    },
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    console.log(a.setPromoCode());
    // setPromoCodes(values);
  }

  return (
    <div className="mt-8  mb-16 w-full">
      <h3 className="text-xl text-[#0f294d]">Promo Codes</h3>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select/Enter" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 mt-3"
              >
                <FormField
                  control={form.control}
                  name="zipcode"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Enter zip code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PromoCodes;
