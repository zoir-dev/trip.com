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
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",  

const ContactDetails = () => {
  return (
    <div>ContactDetails</div>
  )
}

export default ContactDetails