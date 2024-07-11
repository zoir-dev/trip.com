import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { format } from "date-fns";
import { CalendarIcon } from 'lucide-react';
import { GetStaticProps } from 'next';
import { useTranslations } from "next-intl";
import { FormEvent, useState } from 'react';
import { z } from 'zod';

interface Flight {
    id: number;
    from: string;
    to: string;
    date: string;
}

const cityOptions = [
    { value: 'New York', label: 'New York' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Chicago', label: 'Chicago' },
    { value: 'Houston', label: 'Houston' },
    { value: 'Phoenix', label: 'Phoenix' },
    { value: 'London', label: 'London' },
    { value: 'Paris', label: 'Paris' },
    { value: 'Tokyo', label: 'Tokyo' },
    { value: 'Dubai', label: 'Dubai' },
    { value: 'Singapore', label: 'Singapore' },
];

const flightSchema = z.object({
    from: z.string().nonempty("Please select a departure city."),
    to: z.string().nonempty("Please select a destination city."),
    date: z.string().nonempty("Please select a date."),
});

type FlightErrors = Record<keyof Omit<Flight, 'id'>, string>;

interface MultiCityFormProps {
    searchPath: (path: string) => void; // Update this line
}

const MultiCityForm = ({ searchPath }: MultiCityFormProps) => {
    const t = useTranslations('home');
    const [flights, setFlights] = useState<Flight[]>([{ id: 1, from: '', to: '', date: '' }]);
    const [errors, setErrors] = useState<Record<number, FlightErrors>>({});


    const addFlight = () => {
        const lastFlight = flights[flights.length - 1];
        setFlights([...flights, { id: flights.length + 1, from: lastFlight.to, to: '', date: '' }]);
    };

    const handleInputChange = (id: number, field: keyof Flight, value: string) => {
        setFlights(flights.map((flight) =>
            flight.id === id ? { ...flight, [field]: value } : flight
        ));
    };

    const handleDateChange = (id: number, date: Date | undefined) => {
        const formattedDate = date ? format(date, 'yyyy-MM-dd') : '';
        handleInputChange(id, 'date', formattedDate);
    };

    const validateFlights = (): boolean => {
        const newErrors: Record<number, FlightErrors> = {};

        flights.forEach((flight) => {
            const result = flightSchema.safeParse(flight);
            if (!result.success) {
                newErrors[flight.id] = { from: '', to: '', date: '' };
                result.error.errors.forEach((error) => {
                    const field = error.path[0] as keyof FlightErrors;
                    newErrors[flight.id][field] = error.message;
                });
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const searchFlights = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (!validateFlights()) return;

        const path = flights.map((flight) => `${flight.from.toLocaleLowerCase()}-to-${flight.to.toLocaleLowerCase()}-${flight.date}`).join('&');
        searchPath(path); // Call the function with the path argument
    };

    // return (
    //     <div className="my-4">
    //         <h2 className="text-2xl font-bold mb-4 sr-only">Multi-City Flight Search</h2>
    //         <form onSubmit={(evt) => searchFlights(evt)}>
    //             {flights.map((flight) => (
    //                 <div key={flight.id} className="mb-4 p-4 border rounded-lg">
    //                     <div className="grid grid-cols-3 gap-4 mb-2 max-[690px]:grid-cols-1">
    //                         <div>
    // const searchFlights = () => {
    //     const path = flights
    //         .map((flight) => `${flight.from.toLocaleLowerCase()}-to-${flight.to.toLocaleLowerCase()}-${flight.date}`)
    //         .join('&');
    //     // router.push(`/flights/${path}`);
    //     router.push(`/flights`);
    // };

    return (
        <div className="w-full mx-auto py-4">
            <form>
                {flights.map((flight) => (
                    <div key={flight.id} className="mb-3 p-2 border rounded-lg">
                        <div className="grid grid-cols-3 gap-4">
                            <div className=''>
                                <Select
                                    value={flight.from}
                                    onValueChange={(value) => handleInputChange(flight.id, 'from', value)}
                                    required
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="From" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {cityOptions.map((city) => (
                                                <SelectItem key={city.value} value={city.value}>
                                                    {t(city.label.charAt(0).toUpperCase() + city.label.slice(1))}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                {errors[flight.id]?.from && <p className="text-red-500 text-sm">{errors[flight.id]?.from}</p>}
                            </div>
                            <div>
                                <Select
                                    value={flight.to}
                                    onValueChange={(value) => handleInputChange(flight.id, 'to', value)}
                                    required
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="To" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {cityOptions.map((city) => (
                                                <SelectItem key={city.value} value={city.value}>
                                                    {city.label}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                {errors[flight.id]?.to && <p className="text-red-500 text-sm">{errors[flight.id]?.to}</p>}
                            </div>
                            <div>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !flight.date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {flight.date ? format(new Date(flight.date), "PPP") : <span>{t("Pick a date")}</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={flight.date ? new Date(flight.date) : undefined}
                                            onSelect={(date) => handleDateChange(flight.id, date)}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                {errors[flight.id]?.date && <p className="text-red-500 text-sm">{errors[flight.id]?.date}</p>}
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex justify-between items-center">
                    {flights.length < 5 && (
                        <Button
                            variant={'default'}
                            type="button"
                            onClick={addFlight}
                            className="mt-4 w-1/3 text-white p-2 rounded max-[690px]:w-full"
                        >
                            Add Flight
                        </Button>
                    )}
                    <Button
                        variant={'outline'}
                        type="submit"
                        className="mt-4 w-2/5 p-2 rounded max-[690px]:w-full"
                    >
                        {t("Search")}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default MultiCityForm;


export const getStaticProps = (async (context) => {
    return {
        props: {
            messages: (await import(`../../../../messages/${context.locale}.json`)).default,
        },
    };
}) satisfies GetStaticProps;
