import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/date-picker'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { SearchCombobox } from '@/components/ui/search-combobox'
import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { z } from 'zod'
import DatePickerWithRange from './data-input'

const OneWay = ({ round }: { round?: boolean }) => {

  const t = useTranslations('home')

  const FormSchema = z.object({
    from: z.string({ required_error: t("Please select") }),
    to: z.string({ required_error: t("Please select") }),
    date: z.date({ message: t("Please select") }).transform((str) => new Date(str))
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return (
    <div className='border p-4 mt-4 border-border rounded-lg'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=' grid grid-cols-4 items-start gap-4'>
          <FormField control={form.control} name='from' render={
            ({ field }) => (
              <FormItem>
                <FormControl>
                  <SearchCombobox {...field} label={t("Destination")} url='cities' onSelect={(value) => form.setValue('from', value)} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          } />
          <FormField control={form.control} name='to' render={
            ({ field }) => (
              <FormItem>
                <FormControl>
                  <SearchCombobox {...field} label={t("To")} url='cities' onSelect={(value) => form.setValue('to', value)} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          } />
          <FormField control={form.control} name='date' render={
            ({ field }) => (
              <FormItem>
                <FormControl>
                  {
                    round ?
                      <DatePickerWithRange {...field} /> :
                      <DatePicker {...field} value={field.value} setValue={(val) => field.onChange(val)} />
                  }
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          } />
          <Button icon={<Search width={16} />}>{t("Search")}</Button>
        </form>

      </Form>
    </div>
  )
}

export default OneWay