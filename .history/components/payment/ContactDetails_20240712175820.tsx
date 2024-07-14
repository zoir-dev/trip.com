import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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


const formSchema = z.object({
    fullname: z.string(),
    email: z.string(),
    phone: z.string(),
})

const ContactDetails = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            email: "",
            phone: "",
        }
    })

  return (
    <Form {...form}>
        <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                        <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormDescription>
                        Your full name
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="qf0yF@example.com" {...field} />
    </Form>
  )
}

export default ContactDetails