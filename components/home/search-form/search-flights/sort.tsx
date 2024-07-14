import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Passangers from "@/components/ui/passangers"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { Plane, RockingChair } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import MultiCityForm from "./multi-city"
import OneWayForm from "./one-way"
import { useRouter } from "next/router"
import RoundTrip from "./round-trip"

const SortFlights = () => {
    const router = useRouter();
    const t = useTranslations('home')
    const [type, setType] = useState("all")
    const [path, setPath] = useState<string>("")
    const [trip, setTrip] = useState("one-way")
    const [numbers, setNumbers] = useState<any>({ adt: 1, chd: 0, ins: 0, inf: 0 })

    useEffect(() => {
        if (path) {
            router.push(`/flights/${path}${trip === "multi-city" ? "&flighttype=mc" : trip === "one-way" ? "&flighttype=ow" : "&flighttype=rt"}${numbers.adt ? `?adt=${numbers.adt}` : ''}${numbers.chd ? `&chd=${numbers.chd}` : ''}${numbers.ins ? `&ins=${numbers.ins}` : ''}${numbers.inf ? `&inf=${numbers.inf}` : ''}&class=${type}`)
        }
    }, [numbers.adt, numbers.chd, numbers.inf, numbers.ins, path, router, trip, type])

    return (
        <div>
            <div className="flex items-center gap-4 max-[656px]:flex-col">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="outline" className="max-[656px]:w-[288px] max-[656px]:justify-start">
                            <Plane width={18} />
                            {t(trip.charAt(0).toUpperCase() + trip.slice(1))}
                            <CaretSortIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuRadioGroup value={trip} onValueChange={setTrip}>
                            {rounds.map(e => (
                                <DropdownMenuRadioItem value={e} key={e} >
                                    {t(e.charAt(0).toUpperCase() + e.slice(1))}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Passangers numbers={numbers} setNumbers={setNumbers} />
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="outline" className="max-[656px]:w-[288px] max-[656px]:justify-start">
                            <RockingChair width={18} />
                            {t(type.charAt(0).toUpperCase() + type.slice(1))}
                            <CaretSortIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuRadioGroup value={type} onValueChange={setType}>
                            {economies.map(e => (
                                <DropdownMenuRadioItem value={e} key={e} >
                                    {t(e.charAt(0).toUpperCase() + e.slice(1))}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            {trip === "multi-city" ? <MultiCityForm /> : trip === "one-way" ? <OneWayForm /> : <OneWayForm round />}
        </div>
    )
}

export default SortFlights

const rounds = ["one-way", "round-trip", "multi-city"];
const economies = ["all", "economy", "business", "first"];
