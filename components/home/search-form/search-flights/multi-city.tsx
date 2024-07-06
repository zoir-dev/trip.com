import { useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import DatePickerWithRange from './data-input';


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
    // Add more cities as needed
];

const MultiCityForm = () => {
    const [flights, setFlights] = useState<Flight[]>([{ id: 1, from: '', to: '', date: '' }]);
    const router = useRouter();

    const addFlight = () => {
        const lastFlight = flights[flights.length - 1];
        setFlights([...flights, { id: flights.length + 1, from: lastFlight.to, to: '', date: '' }]);
    };

    const handleInputChange = (id: number, field: keyof Flight, value: string) => {
        setFlights(flights.map((flight) =>
            flight.id === id ? { ...flight, [field]: value } : flight
        ));
    };

    const searchFlights = () => {
        const path = flights
            .map((flight) => `${flight.from.toLocaleLowerCase()}-to-${flight.to.toLocaleLowerCase()}-${flight.date}`)
            .join('&');
        // router.push(`/flights/${path}`);
        router.push(`/flights`);
    };

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
                                                <SelectItem key={city.value} value={city.value}>{city.label}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
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
                                                <SelectItem key={city.value} value={city.value}>{city.label}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <DatePickerWithRange/>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex justify-between items-center">
                    {flights.length < 5 && (
                        <Button
                            type="button"
                            onClick={addFlight}
                            className="mt-4 bg-blue-500 text-white p-2 rounded"
                        >
                            Add Flight
                        </Button>
                    )}
                    <Button
                        type="button"
                        onClick={searchFlights}
                        className="mt-4 bg-green-500 text-white p-2 rounded"
                    >
                        Search
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default MultiCityForm;
