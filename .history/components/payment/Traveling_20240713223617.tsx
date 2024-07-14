"use client";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

interface ContactFormProps {
  givenName: string;
  lastName: string;
  gender: string;
  dob: Date;
  country: string;
  passwordId: string;
  idType: string;
  idExpressionDate: Date;
} 

const formSchema = z.object({
  givenName: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  gender: z.enum(["male", "female"], {
    required_error: "Please select a gender.",
  }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  country: z.string().nonempty("Please select a country."),
  passwordId: z.string().regex(/^[A-Z]{2}[0-9]{7}$/, {
    message: "Invalid code format. Format should be: XX9999999",
  }),
  idType: z.string().nonempty("Please select an ID type."),
  idExpressionDate: z.date({
    required_error: "An ID expiration date is required.",
  }),
});


function TravelingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      givenName: "",
      lastName: "",
      gender: "male",
      dob: new Date(),
      country: "",
      passwordId: "",
      idType: "",
      idExpressionDate: new Date(),
    },
  });

  const countries = [
    { label: "United States", value: "us" },
    { label: "Canada", value: "ca" },
    { label: "United Kingdom", value: "uk" },
    { label: "Australia", value: "au" },
    { label: "Germany", value: "de" },
    { label: "France", value: "fr" },
    { label: "Spain", value: "es" },
    { label: "Portugal", value: "pt" },
    { label: "Russia", value: "ru" },
    { label: "Japan", value: "jp" },
    { label: "South Korea", value: "kr" },
    { label: "China", value: "cn" },
  ];

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="my-8">
      <div className="container bg-white rounded-lg md:flex">
        <div className="md:w-[100%] w-full">
          <Form {...form}>
            <h1 className="text-2xl text-[#0f294d] font-bold mb-4">Contact Information</h1>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-6 md:gap-6"
            >
              <FormField
                control={form.control}
                name="givenName"
                render={({ field }) => (
                  <FormItem className="md:col-span-3">
                    <FormControl>
                      <Input
                        className="bg-background"
                        placeholder="Given name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="md:col-span-3">
                    <FormControl>
                      <Input
                        className="bg-background"
                        placeholder="Last Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            aria-placeholder="Pick a date"
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormControl>
                      <Select
                        value={form.watch("country")}
                        onValueChange={(value) =>
                          form.setValue("country", value)
                        }
                        required
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent>
                          <input
                            type="text"
                            className="outline-none px-3 py-2 border-[1px] w-full rounded-lg"
                          />
                          <SelectGroup>
                            {countries.map((city) => (
                              <SelectItem key={city.value} value={city.label}>
                                {city.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passwordId"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormControl>
                      <Input
                        className="bg-background"
                        placeholder="Password ID"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="idType"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormControl>
                      <Select
                        value={form.watch("idType")}
                        onValueChange={(value) =>
                          form.setValue("idType", value)
                        }
                        required
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="ID Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {form.watch("lastName") ? (
                              <SelectItem value="passport">Passport</SelectItem>) : (<p> malumotni to'ldiring </p>)}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {form.watch("idType") === "passport" ? (
                <FormField
                  control={form.control}
                  name="idExpressionDate"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              aria-placeholder="Pick a date"
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : null}
              {/* <div className="w-full md:col-span-6 flex justify-center">
                <Button
                  onClick={form.handleSubmit(onSubmit)}
                  className="w-full md:w-1/2 block mt-6"
                  type="submit"
                >
                  Submit
                </Button>
              </div> */}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default TravelingForm;
