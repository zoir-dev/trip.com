import { useState } from "react"
import RangeCalendar from "../../ui/range-calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover"
import { Input } from "../../ui/input"
import { useTranslations } from "next-intl"
import { Button } from "../../ui/button"
import Passangers from "../../ui/passangers"
import { Search } from "lucide-react"

const SearchHotels = () => {
    const [numbers, setNumbers] = useState<any>({ adt: 1, chd: 0, ins: 0, inf: 0 })
    // const [date, setDate] = useState<DateRange | undefined>({
    //     from: new Date(2022, 0, 20),
    //     to: addDays(new Date(2022, 0, 20), 20),
    // })
    const [open, setOpen] = useState(false)

    const t = useTranslations('home')

    return (
        <div className="flex gap-4">
            <Popover open={open} onOpenChange={setOpen} >
                <PopoverTrigger className="w-full" >
                    <Input placeholder={t("Destination")} />
                </PopoverTrigger>
                <PopoverContent className="w-auto p-1" align="start">
                    <h4 className="text-base font-medium pl-2 text-muted-foreground">
                        {t("Popular destinations")}
                    </h4>
                    <div className="grid grid-cols-5 gap-4 p-4">
                        {cities.map((city) => (
                            <Button key={city.name} variant='outline' onClick={() => setOpen(false)}>
                                {city.name}
                            </Button>
                        ))}
                    </div>
                </PopoverContent>
            </Popover>
            <RangeCalendar className="w-full" />
            <Passangers numbers={numbers} setNumbers={setNumbers} />
            <Button>
                <Search width={18} />
                {t("Search")}
            </Button>
        </div>
    )
}

export default SearchHotels




const cities = [

    {
        name: "Paris",
    },
    {
        name: "London",
    },
    {
        name: "New York",
    },
    {
        name: "Barcelona",
    },
    {
        name: "Moscow",
    },
    {
        name: "Tokyo",
    },
    {
        name: "Sydney",
    },
    {
        name: "Berlin",
    },
    {
        name: "Rome",
    },
    {
        name: "Amsterdam",
    }
]