import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from "date-fns";
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { useTranslations } from "next-intl";
import { z } from 'zod';

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

type FlightErrors = Record<keyof Omit<{ from: string, to: string, date: string }, 'id'>, string>;


const OneWayForm = ({ searchPath }: { searchPath: (path: string) => void }) => {
    const t = useTranslations('');
    const [flight, setFlight] = useState<{ from: string, to: string, date: string }>({ from: '', to: '', date: '' });
    const [errors, setErrors] = useState<FlightErrors>({ from: '', to: '', date: '' });

    const handleInputChange = (field: keyof { from: string, to: string, date: string }, value: string) => {
        setFlight({ ...flight, [field]: value });
    };

    const handleDateChange = (date: Date | undefined) => {
        const formattedDate = date ? format(date, 'yyyy-MM-dd') : '';
        handleInputChange('date', formattedDate);
    };

    const validateFlight = (): boolean => {
        const result = flightSchema.safeParse(flight);
        if (!result.success) {
            const newErrors: FlightErrors = { from: '', to: '', date: '' };
            result.error.errors.forEach((error) => {
                const field = error.path[0] as keyof FlightErrors;
                newErrors[field] = error.message;
            });
            setErrors(newErrors);
            return false;
        }
        setErrors({ from: '', to: '', date: '' });
        return true;
    };

    const searchFlight = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (!validateFlight()) return;

        const path = `${flight.from.toLocaleLowerCase()}-to-${flight.to.toLocaleLowerCase()}-${flight.date}`;

        searchPath(path);
    };

    return (
        <div className="my-4">
            <h2 className="text-2xl font-bold mb-4 sr-only">One-Way Flight Search</h2>
            <form onSubmit={(evt) => searchFlight(evt)}>
                <div className="mb-4 p-4 border rounded-lg">
                    <div className="grid grid-cols-4 gap-4 mb-2 max-[690px]:grid-cols-1">
                        <div>
                            <Select
                                value={flight.from}
                                onValueChange={(value) => handleInputChange('from', value)}
                                required
                            >
                                <SelectTrigger className="">
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
                            {errors.from && <p className="text-red-500">{errors.from}</p>}
                        </div>
                        <div>
                            <Select
                                value={flight.to}
                                onValueChange={(value) => handleInputChange('to', value)}
                                required
                            >
                                <SelectTrigger className="">
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
                            {errors.to && <p className="text-red-500">{errors.to}</p>}
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
                                        {flight.date ? format(new Date(flight.date), "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={flight.date ? new Date(flight.date) : undefined}
                                        onSelect={(date) => handleDateChange(date)}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            {errors.date && <p className="text-red-500">{errors.date}</p>}
                        </div>
                        <div className="flex space-x-4">
                            <Button
                                variant={'default'}
                                type="submit"
                                className="p-2 rounded w-full"
                            >
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default OneWayForm;
