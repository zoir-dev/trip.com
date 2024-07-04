import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Passangers from "@/components/ui/passangers"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { Plane, RockingChair } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"
import MultiCityForm from "./multi-city"

const SortFlights = () => {
    const t = useTranslations('home')
    const [type, setType] = useState("all")
    const [trip, setTrip] = useState("one-way")
    const [numbers, setNumbers] = useState<any>({ adt: 1, chd: 0, ins: 0, inf: 0 })
    return (
        <div>
            <div className="flex items-center gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="outline" >
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
                        <Button variant="outline" >
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
            {trip === "multi-city" && <MultiCityForm />}
        </div>
    )
}

export default SortFlights

const rounds = ["one-way", "round-trip", "multi-city"];
const economies = ["all", "economy", "business", "first"];
