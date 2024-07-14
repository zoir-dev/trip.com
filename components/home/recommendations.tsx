import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Link } from '@/navigation'
import { MoveRight } from 'lucide-react'
import ContactForm from './search-form/ContactForm'

const Recommendations = () => {
    const [tab, setTab] = useState('flight')
    const t = useTranslations('home')

    return (
        <div className='w-full container2 mx-auto flex flex-col gap-4'>
            <h2 className='text-3xl font-bold'>BiletBor.me {t("Recommendations")}</h2>
            <div className='flex gap-4 items-center'>
                <Button variant={tab === 'flight' ? 'default' : 'outline'}
                    onClick={() => setTab('flight')}
                >
                    {t("Popular Flights")}

                </Button>
                <Button variant={tab === 'hotel' ? 'default' : 'outline'}
                    onClick={() => setTab('hotel')}
                >
                    {t("Popular Hotels")}
                </Button>
            </div>
            <div className='border-primary border rounded-md w-full p-4 sm:justify-between gap-4 grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
                {tab === 'flight' &&
                    flights.map(({ from, to }) => (
                        <Link href={'/flights'} className='flex items-center gap-1 hover:text-primary text-sm' key={from + to}>
                            {from}<MoveRight width={18} />{to}
                        </Link>
                    ))
                }
                {
                    tab === 'hotel' &&
                    hotels.map(({ city }) => (
                        <Link href={'/hotels'} className='flex items-center gap-1 hover:text-primary text-sm' key={city}>
                            {t('hotel_recommendation', { name: city })}
                        </Link>
                    ))
                }
            </div>
            <ContactForm />
        </div>
    )
}

export default Recommendations


const flights = [
    {
        from: "Tashkent",
        to: "Samarkand",
    },
    {
        from: "Dubai",
        to: "Amman",
    },
    {
        from: "Dubai",
        to: "Bukhara",
    },
    {
        from: "Dubai",
        to: "Bishkek"
    },
    {
        from: "Dubai",
        to: "Tashkent",
    },
]


const hotels = [
    {
        city: "Dubai"
    },
    {
        city: "Amman"
    },
    {
        city: "Bishkek"
    },
    {
        city: "Tashkent"
    },
    {
        city: "Samarkand"
    },
    {
        city: "Bukhara"
    },
    {
        city: "Astana"
    },
    {
        city: "Nur-Sultan"
    },
    {
        city: "Shymkent"
    },
    {
        city: "Tashkent"
    },
    {
        city: "Samarkand"
    },
    {
        city: "Bukhara"
    },
    {
        city: "Astana"
    },
    {
        city: "Nur-Sultan"
    },
    {
        city: "Shymkent"
    },
]