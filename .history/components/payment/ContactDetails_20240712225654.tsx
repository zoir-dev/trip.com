import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
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
  email: z.string().email(),
  phone: z.string().regex(/^\+998 \d{2} \d{3} \d{2} \d{2}$/, {
    message: "Telefon raqam +998 XX XXX XX XX formatida bo'lishi kerak",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const ContactDetails: React.FC = () => {
  const { onSubmit: contextOnSubmit } = usePromoCode();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log(data);
    contextOnSubmit(data);
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-3 gap-x-3 my-8">
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
        <button type="submit">Submit</button>
      </form>
    </Form>
  );
};

export default ContactDetails;
