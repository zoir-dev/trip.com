import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { usePromoCode } from "@/hooks/PromoProvider";

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
  const { onSubmit } = usePromoCode();

  type FormSchema = z.infer<typeof formSchema>;

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      zipcode: "",
    },
  });

  const handleSubmit: SubmitHandler<FormSchema> = (values) => {
    onSubmit(values);
  };

  return (
    <div className="mt-8  mb-16 w-full">
      <h3 className="text-[24px] font-bold text-[#0f294d]">Promo Codes</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 mt-3">
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
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </Form>
    </div>
  );
};

export default PromoCodes;
