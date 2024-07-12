import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/date-picker'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { SearchCombobox } from '@/components/ui/search-combobox'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus, Search, Trash2 } from 'lucide-react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useTranslations } from 'use-intl'
import { z } from 'zod'

const OneWay = () => {

    const t = useTranslations('home')

    const FormSchema = z.object({
        cities: z.array(
            z.object({
                from: z.string({ required_error: t("Please select") }).min(1, t("Please select")),
                to: z.string({ required_error: t("Please select") }).min(1, t("Please select")),
                date: z.date({ message: t("Please select") }).transform((str) => new Date(str))
            }))
    })

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            cities: [{
                from: '',
                to: '',
                date: null
            }],
        },
    })

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "cities",
    })

    async function onSubmit(data: any) {
        console.log(data)
    }

    return (
        <div className='border p-4 mt-4 border-border rounded-lg'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                    {fields.map((field, index) => (
                        <div key={field.id} className=' grid grid-cols-3 items-start gap-4'>
                            <FormField control={form.control} name={`cities.${index}.from`} render={
                                ({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <SearchCombobox {...field} label={t("Destination")} url='cities' onSelect={(value) => form.setValue(`cities.${index}.from`, value)} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            } />
                            <FormField control={form.control} name={`cities.${index}.to`} render={
                                ({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <SearchCombobox {...field} label={t("To")} url='cities' onSelect={(value) => form.setValue(`cities.${index}.to`, value)} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            } />
                            <FormField control={form.control} name={`cities.${index}.date`} render={
                                ({ field }) => (
                                    <FormItem className='relative'>
                                        <FormControl className='relative'>
                                            <DatePicker {...field} value={form.getValues(`cities.${index}.date`)} setValue={(val) => field.onChange(val)} />
                                        </FormControl>
                                        {index !== 0 && <Button icon={<Trash2 size={16} />} size='icon' className='absolute right-0 -top-1/2 translate-x-1/2 rounded-full p-2' onClick={() => remove(index)} />}
                                        <FormMessage />
                                    </FormItem>
                                )
                            } />
                        </div>
                    ))}
                    <div className='flex items-center justify-between'>
                        <Button icon={<Plus width={16} />} variant='outline' type='button'
                            onClick={() => fields.length < 5 && append({ from: '', to: '', date: null })}
                        >
                            {t("Add a route")}
                        </Button>
                        <Button icon={<Search width={16} />}>{t("Search")}</Button>
                    </div>
                </form>

            </Form>
        </div>
    )
}

export default OneWay