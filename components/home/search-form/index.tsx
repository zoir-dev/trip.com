import { Hotel, Plane } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React from 'react'
import SearchHotels from './search-hotels'
import SearchFlights from './search-flights'

const SearchForm = ({ tab, setTab }: thisProps) => {
  const t = useTranslations('home')
  return (
    <div className="min-h-[60vh] flex flex-col w-full justify-center items-center">
      <h1 className={`text-4xl font-bold duration-700 ${tab === 'flight' ? 'text-white' : 'text-primary'} pb-10`}>{t("Your Trip Starts Here")}</h1>
      <div className="p-[5px] rounded-full bg-primary z-50 flex gap-4">
        <div className={`rounded-full px-4 py-1.5 duration-100 font-semibold text-base text-white  cursor-pointer flex items-center gap-2 select-none ${tab === 'flight' && 'bg-white !text-primary'}`} onClick={() => setTab('flight')}>
          <Plane width={20} /> <p>{t("Flights")}</p>
        </div>
        <div className={`rounded-full px-4 py-1.5 duration-100 font-semibold text-base  text-white cursor-pointer flex items-center gap-2 select-none ${tab === 'hotel' && 'bg-white !text-primary'}`} onClick={() => setTab('hotel')}>
          <Hotel width={20} /> <p>{t("Hotels")}</p>
        </div>
      </div>
      <div className="container2 -mt-6 w-full bg-white rounded-md p-4 pt-10 h-auto">
        {tab === 'flight' && <SearchFlights />}
        {tab === 'hotel' && <SearchHotels />}
      </div>
    </div>
  )
}

export default SearchForm

interface thisProps {
  tab: string
  setTab: (tab: string) => void
}