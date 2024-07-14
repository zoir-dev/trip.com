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

const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      zipcode: "",
    },
  });

const PromoCodes = () => {
  return (
    <Card></Card>
  )
}

export default PromoCodes