import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast" 

const FormSchema = z.object({
    type: z.enum(["all", "mentions", "none"], {
      required_error: "You need to select a notification type.",
    }),
  })
  
function AcardionFilters() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
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
    return (
       
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Stopover Cities</AccordionTrigger>
          <AccordionContent className="flex justify-start items-center gap-2 px-3">
            <input type="checkbox" id="terms1" />
            <div className="grid gap-1.5 leading-none">
                <label
                htmlFor="terms1"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Seul
                </label>
            </div>
          </AccordionContent>
          <AccordionContent className="flex justify-start items-center gap-2 px-3">
            <input type="checkbox" id="terms2" />
            <div className="grid gap-1.5 leading-none">
                <label
                htmlFor="terms2"
                className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Beijing
                </label>
            </div>
          </AccordionContent>
          <AccordionContent className="flex justify-start items-center gap-2 px-3">
            <input type="checkbox" id="terms3" />
            <div className="grid gap-1.5 leading-none">
                <label
                htmlFor="terms3"
                className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Almaty
                </label>
            </div>
          </AccordionContent>
          <AccordionContent className="flex justify-start items-center gap-2 px-3">
            <input type="checkbox" id="terms4" />
            <div className="grid gap-1.5 leading-none">
                <label
                htmlFor="terms4"
                className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Hong Kong
                </label>
            </div>
          </AccordionContent>
          <AccordionContent className="flex justify-start items-center gap-2 px-3">
            <input type="checkbox" id="terms5" />
            <div className="grid gap-1.5 leading-none">
                <label
                htmlFor="terms5"
                className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Dubai
                </label>
            </div>
          </AccordionContent>
          <AccordionContent className="flex justify-start items-center gap-2 px-3">
            <input type="checkbox" id="terms6" />
            <div className="grid gap-1.5 leading-none">
                <label
                htmlFor="terms6"
                className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Shanghai
                </label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
        <AccordionTrigger>Airpots</AccordionTrigger>
          <AccordionContent className="flex justify-start items-center gap-2 px-3">
            <input type="checkbox" id="terms1" />
            <div className="grid gap-1.5 leading-none">
                <label
                htmlFor="terms1"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Seul
                </label>
            </div>
          </AccordionContent>
          <AccordionContent className="flex justify-start items-center gap-2 px-3">
            <input type="checkbox" id="terms2" />
            <div className="grid gap-1.5 leading-none">
                <label
                htmlFor="terms2"
                className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Beijing
                </label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Cabin</AccordionTrigger>
          <AccordionContent>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
                <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0 px-3 py-2 hover:bg-white hover:text-primary">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Economy
                    </FormLabel>
                  </FormItem>                  
                  <FormItem className="flex items-center space-x-3 space-y-0 px-3 py-2 hover:bg-white hover:text-primary">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Economy premuim</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 px-3 py-2 hover:bg-white hover:text-primary">
                    <FormControl>
                      <RadioGroupItem value="business" />
                    </FormControl>
                    <FormLabel className="font-normal">Business</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 px-3 py-2 hover:bg-white hover:text-primary">
                    <FormControl>
                      <RadioGroupItem value="first" />
                    </FormControl>
                    <FormLabel className="font-normal">First</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    )
  }

  export default AcardionFilters
  