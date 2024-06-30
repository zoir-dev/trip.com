import { CaretSortIcon } from "@radix-ui/react-icons"
import { Button } from "./button"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Accessibility, Baby, MinusCircle, PlusCircle, User } from "lucide-react"
import { useTranslations } from "next-intl"

interface thisProps {
    numbers: any;
    setNumbers: (val: {
        adt: number;
        chd: number;
        ins: number;
        inf: number;
    }) => void;
}
const Passangers = ({ numbers, setNumbers }: thisProps) => {
    const t = useTranslations('home')
    return (
        <Popover>
            <PopoverTrigger>
                <Button role="combobox" variant="outline" className="w-[288px] flex items-center justify-between hover:!text-primary group">
                    {getTitle(numbers)}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 text-muted-foreground" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-2">
                {numberTypes.map((n: NumberType) => (
                    <div key={n.value}>
                        <div className='flex items-center justify-between w-full select-none'>
                            <div>
                                <p className="-mb-1">{t(n.label)}</p>
                                {n.des && <span className='text-xs text-muted-foreground'>{t(n?.des)}</span>}
                            </div>
                            <div className='flex items-center gap-2'>
                                <Button variant='ghost' size='icon'
                                    onClick={() => setNumbers({ ...numbers, [n.value]: numbers[n.value] - 1 })}
                                    disabled={n.value === 'adt' ? numbers[n.value] === 1 : numbers[n.value] === 0}
                                >
                                    <MinusCircle width={20} className="text-primary" />
                                </Button>
                                <span className='text-sm w-2'>
                                    {numbers[n.value]}
                                </span>
                                <Button variant='ghost' size='icon'
                                    onClick={() => setNumbers({ ...numbers, [n.value]: numbers[n.value] + 1 })}
                                    disabled={isDisabled(numbers)}

                                >
                                    <PlusCircle width={20} className="text-primary" />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </PopoverContent>
        </Popover>
    )
}

export default Passangers


interface NumberType {
    label: string;
    value: string;
    des?: string;
    icon?: React.ReactNode;
}

interface Numbers {
    adt: number;
    chd: number;
    ins: number;
    inf: number;
}

const isDisabled = (numbers: Numbers) => {
    return numbers.adt + numbers.chd + numbers.inf + numbers.ins === 9;
};


const getTitle = (numbers: Numbers) => {
    return (
        <div className='flex items-center gap-4 w-full'>
            <div className='flex items-center group-hover:text-primary'>
                <User size={18} /> {`×${numbers.adt}`}
            </div>
            {numbers.chd > 0 && <div className='flex items-center group-hover:text-primary'>
                <User size={16} /> {`×${numbers.chd}`}
            </div>}
            {numbers.ins > 0 && <div className='flex items-center group-hover:text-primary'>
                <Baby size={18} /> {`×${numbers.ins}`}
            </div>}
            {numbers.inf > 0 && <div className='flex items-center group-hover:text-primary'>
                <Accessibility size={18} /> {`×${numbers.inf}`}
            </div>}
        </div>
    )
}


const numberTypes = [
    {
        label: 'Adults',
        value: 'adt',
        icon: <User width={18} />
    },
    {
        label: 'Children',
        value: 'chd',
        des: '2-11 years',
        icon: <User width={16} />
    },
    {
        label: 'Babies',
        value: 'ins',
        des: '0-2 years',
        icon: <Baby width={16} />
    },
    {
        label: 'Infants',
        value: 'inf',
        des: 'Under 2 years',
        icon: <Accessibility width={16} />
    }
]