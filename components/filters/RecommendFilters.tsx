/* eslint-disable react/jsx-no-undef */
"use client" 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from "next/image"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
 interface itemsType {
    id: string
    label: string
    image: string
 }
const items: itemsType[] = [
  {
    id: "checked baggage included",
    label: "Checked baggage included",
    image: "/icons/baggage.png",
  },
  {
    id: "hide low-cost airlines",
    label: "Hide low-cost airlines",
    image: "/icons/low-price.png",
  },
  {
    id: "carry-on baggage included",
    label: "Carry-on baggage included",
    image: "/icons/baggage.png",
  },
  {
    id: "student tickets",
    label: "Student tickets",
    image: "/icons/student.png",
  },
  {
    id: "hide codeshare flights",
    label: "Hide codeshare flights",
    image: "/icons/flight.png",
  },  
]
 
const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

function RecommendFilters() {
    const [ checkedItems, setCheckedItems ] = useState<string[]>([])
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            items: [],
        }
      })
     
      function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
      }

      const handleCheckedChange = (checked: boolean, itemId: string) => {
        if (checked) {
          setCheckedItems([...checkedItems, itemId]);
        } else {
          setCheckedItems(checkedItems.filter((id) => id !== itemId));
        }
      };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Recommended</FormLabel>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    const isChecked = field.value.includes(item.id);
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start  space-x-3 space-y-0 py-2 px-2 cursor-pointer hover:bg-white hover:text-primary
                        "
                      >
                        <FormControl className=" mt-[2px]">
                          <Checkbox
                            checked={field.value.includes(item.id)}
                            onCheckedChange={(checked) => {
                                handleCheckedChange(Boolean(checked), item.id);
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    );
                              }}
                          />
                        </FormControl>
                        <Image src={item.image} alt={item.label} width={20} height={20}/>
                        <FormLabel className={`text-sm font-normal ${
                            isChecked ? "text-primary" : ""
                          }`}>
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
    
  )
}

export default RecommendFilters