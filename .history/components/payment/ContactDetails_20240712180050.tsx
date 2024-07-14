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
      <form action=""></form>
    </Form>
  )
}

export default ContactDetails