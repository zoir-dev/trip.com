import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { usePromoCode } from "./PromoProvider";

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
import { toast } from "../ui/use-toast";

const formSchema = z.object({
  fullname: z.string(),
  email: z.string(),
  phone: z.string(),
});

const ContactDetails = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
    });
    console.log(evt);
    
  };

  return (
    <Form {...form}>
      <form onSubmit={(evt) => onSubmit(evt)} className="grid grid-cols-3 gap-x-3 my-8">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="qf0yF@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="+998 90 123 45 67" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p>ZIP CODE: {}</p>
      </form>
    </Form>
  );
};

export default ContactDetails;
