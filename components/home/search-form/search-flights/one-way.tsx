import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useTranslations } from "next-intl";
import { string, z } from "zod";

const cityOptions = [
  { value: "New York", label: "New York" },
  { value: "Los Angeles", label: "Los Angeles" },
  { value: "Chicago", label: "Chicago" },
  { value: "Houston", label: "Houston" },
  { value: "Phoenix", label: "Phoenix" },
  { value: "London", label: "London" },
  { value: "Paris", label: "Paris" },
  { value: "Tokyo", label: "Tokyo" },
  { value: "Dubai", label: "Dubai" },
  { value: "Singapore", label: "Singapore" },
];

const flightSchema = z.object({
  from: z.array(z.string()),
  to: z.array(z.string()),
  date: z.string().nonempty("Please select a date."),
});

type FlightErrors = Record<keyof z.infer<typeof flightSchema>, string>;

const RoundTrip = ({ searchPath }: { searchPath: (path: string) => void }) => {
  const t = useTranslations("");
  const [flight, setFlight] = useState<z.infer<typeof flightSchema>>({
    from: [],
    to: [],
    date: "",
  });
  const [errors, setErrors] = useState<FlightErrors>({
    from: "",
    to: "",
    date: "",
  });

  const handleInputChange = (
    field: keyof z.infer<typeof flightSchema>,
    value: string[] | string
  ) => {
    setFlight({ ...flight, [field]: value });
  };

  const handleDateChange = (date: Date | undefined) => {
    const formattedDate = date ? format(date, "yyyy-MM-dd") : "";
    setFlight({ ...flight, date: formattedDate });
  };

  const validateFlight = (): boolean => {
    const result = flightSchema.safeParse(flight);
    if (!result.success) {
      const newErrors: FlightErrors = { from: "", to: "", date: "" };
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof FlightErrors;
        newErrors[field] = error.message;
      });
      setErrors(newErrors);
      return false;
    }

    setErrors({ from: "", to: "", date: "" });
    return true;
  };

  const [cities, setCities] = useState<string[]>([]);
  const [toCities, setToCities] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);

  const handleModalFromClick = (cityLabel: string) => {
    if (cities.includes(cityLabel)) {
      setOpen(false);
      return;
    }
    const updatedCities = [...cities, cityLabel];
    setCities(updatedCities);
    handleInputChange("from", updatedCities);
    setOpen(false);
  };

  const handleModalToClick = (cityLabel: string) => {
    if (toCities.includes(cityLabel)) {
      setToOpen(false);
      return;
    }
    const updatedToCities = [...toCities, cityLabel];
    setToCities(updatedToCities);
    handleInputChange("to", updatedToCities);
    setToOpen(false);
  };

  const handleDeleteClick = (cityLabel: string, type: "from" | "to") => {
    if (type === "from") {
      const updatedCities = cities.filter((city) => city !== cityLabel);
      setCities(updatedCities);
      handleInputChange("from", updatedCities);
    } else {
      const updatedToCities = toCities.filter((city) => city !== cityLabel);
      setToCities(updatedToCities);
      handleInputChange("to", updatedToCities);
    }
  };

  const searchFlight = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!validateFlight()) return;

    const path = `${flight.from.join("-to-").toLocaleLowerCase()}-to-${flight.to
      .join("-to-")
      .toLocaleLowerCase()}-${flight.date}`;
    searchPath(path);

    console.log(flight);
  };

  const citiesContainerRef = useRef<HTMLDivElement>(null);
  const toCitiesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (citiesContainerRef.current) {
      const width = cities.length > 0 ? "90%" : "0";
      citiesContainerRef.current.style.width = width;
    }
    if (toCitiesContainerRef.current) {
      const width = toCities.length > 0 ? "90%" : "0";
      toCitiesContainerRef.current.style.width = width;
    }
  }, [cities, toCities]);

  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-4 sr-only">One-Way Flight Search</h2>
      <form onSubmit={(evt) => searchFlight(evt)}>
        <div className="mb-4 p-4 border rounded-lg">
          <div className="grid grid-cols-4 items-center gap-4 mb-2">
            <div
              onClick={() => {
                setToOpen(false);
                setOpen(true);
              }}
              className="w-[100%] flex relative items-center border-[1px] border-[#D9D9D9] px-2 rounded-xl"
            >
              <div
                ref={citiesContainerRef}
                className="w-[80%] overflow-x-auto scroll-none flex items-center justify-between space-x-2"
              >
                {cities.map((city, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 whitespace-nowrap bg-blue-100 rounded relative"
                  >
                    {city}
                    <p
                      onClick={() => handleDeleteClick(city, "from")}
                      className="cursor-pointer absolute top-[-7px] right-1 text-[14px] bg-slate-500 px-1 rounded-lg text-white"
                    >
                      x
                    </p>
                  </span>
                ))}
              </div>
              <input
                className="outline-none w-[50%] px-3 py-2 rounded-md"
                type="text"
              />
              <div
                className={`${
                  open ? "block" : "hidden"
                } w-[600px] grid grid-cols-4 ps-4 py-3 gap-3 bg-[white] border-[1px] border-[gray] rounded-lg shadow-md absolute top-[45px] left-0`}
              >
                {cityOptions.map((city, index) => (
                  <p
                    onClick={() => handleModalFromClick(city.label)}
                    key={index}
                    className="px-2 text-center py-1 cursor-pointer hover:bg-gray-300 rounded"
                  >
                    {city.label}
                  </p>
                ))}
              </div>
            </div>

            <div
              onClick={() => {
                setToOpen(true);
                setOpen(false);
              }}
              className="w-[100%] flex relative items-center border-[1px] border-[#D9D9D9] px-2 rounded-xl"
            >
              <div className="w-[80%] overflow-x-auto scroll-none flex items-center justify-between space-x-2">
                {toCities.map((city, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 whitespace-nowrap bg-blue-100 rounded relative"
                  >
                    {city}
                    <p
                      onClick={() => {
                        handleDeleteClick(city, "to");
                        setToOpen(false);
                      }}
                      className="cursor-pointer absolute top-[-7px] right-1 text-[14px] bg-slate-500 px-1 rounded-lg text-white"
                    >
                      x
                    </p>
                  </span>
                ))}
              </div>
              <input
                className="outline-none w-[50%] px-3 py-2 rounded-md"
                type="text"
              />
              <div
                className={`${
                  toOpen ? "block" : "hidden"
                } w-[600px] grid grid-cols-4 ps-4 py-3 gap-3 bg-[white] border-[1px] border-[gray] rounded-lg shadow-md absolute top-[45px] left-0`}
              >
                {cityOptions.map((city, index) => (
                  <p
                    onClick={() => {
                      handleModalToClick(city.label);
                      setToOpen(false);
                    }}
                    key={index}
                    className="px-2 text-center py-1 cursor-pointer hover:bg-gray-300 rounded"
                  >
                    {city.label}
                  </p>
                ))}
              </div>
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
                    {flight.date ? (
                      format(new Date(flight.date), "yyyy-MM-dd")
                    ) : (
                      <span>Pick a date</span>
                    )}
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
                variant={"default"}
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

export default RoundTrip;
