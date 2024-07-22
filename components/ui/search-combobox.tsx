import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useLocale, useTranslations } from "next-intl"
import { http } from "@/lib/http"
import Spinner from "./spinner"

type thisProps = {
    onSelect: (value: any) => void,
    label: string,
    url: string
}

export function SearchCombobox({ onSelect, label, url }: thisProps) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState<any>()
    const [search, setSearch] = React.useState("")
    const [data, setData] = React.useState<any>([])
    const [loading, setLoading] = React.useState(false)
    const t = useTranslations('shadcn')
    const locale = useLocale()

    async function handleChange(s: string) {
        setSearch(s)
        if (s) {
            try {
                setLoading(true)
                const res = await http.post(url, {
                    company_req_id: process.env.NEXT_PUBLIC_COMPANY_REQ_ID,
                    value: s
                })
                setData(res.data.data)
            } catch (error) {

            } finally {
                setLoading(false)
            }
        }
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {value
                        ? data?.find((item: any) => item?.item_code === value.item_code)?.item[locale]
                        : label}
                    <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Command>
                    <CommandList>
                        <CommandInput placeholder={label} value={search} onValueChange={handleChange} />
                        <CommandEmpty>{t("No results")}</CommandEmpty>
                        <CommandGroup className="relative">
                            {loading && <div className="flex items-center absolute top-0 justify-center w-full h-full backdrop-blur-sm z-10">
                                <Spinner size="sm" />
                            </div>}
                            {data?.map((item: any) => (
                                <CommandItem
                                    key={item.item[locale]}
                                    value={item.item[locale]}
                                    onSelect={() => {
                                        setValue(item.item_code === value?.item_code ? "" : item)
                                        setOpen(false)
                                        onSelect(item.item_code)
                                    }}
                                    className="cursor-pointer text-black relative"
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value?.item_code === item?.item_code ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {item.item[locale]}, {item?.country[locale]}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
