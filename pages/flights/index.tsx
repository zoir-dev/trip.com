  
  import { useEffect, useState } from 'react'
  import DateCarusel from '@/components/date-carusel/DateCarusel'
  import AcardionFilters from '@/components/filters/AcardionFilters'
  import AirlinesFilter from '@/components/filters/AirlinesFilters'
  import RecommendFilters from '@/components/filters/RecommendFilters'
  import StopsFilters from '@/components/filters/StopsFilters'
  import { ScrollArea } from '@radix-ui/react-scroll-area'
  import React from 'react'
  import { Button } from "@/components/ui/button"

  import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import FlightTable from '@/components/flight-table/FlightTable'
  import { GetStaticProps } from 'next'
  import { useTranslations } from 'next-intl'
  import SearchFlights from '@/components/home/search-form/search-flights'

  function Flights() {
    const [ isClient, setIsClient ] = useState(false)
    const t = useTranslations('flights')
    useEffect(() => {
      setIsClient(true)
    }, [])
    if(!isClient) return null

    return (
      <div className='bg-[#F0F2F4] h-full'>
        <div className='container'>
          <div className='pt-10'>
            <div className="w-full bg-white rounded-md p-4">
              <SearchFlights />
            </div>
            <DateCarusel />
            <div className='mt-10 md:flex gap-2'>
              {/* Desktop version */}
                <ScrollArea className='md:block hidden scroll-area-custom w-[30%]'>
                  <RecommendFilters />
                  <AirlinesFilter />
                  <StopsFilters />
                <AcardionFilters />
                </ScrollArea>
              {/* Desktop version */}

              {/* Mobile version */}
                <div className='md:hidden block w-full mb-5'>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">{t("Filters")}</Button>
                  </SheetTrigger>
                  <SheetContent className='h-full overflow-auto'>
                    <ScrollArea className='py-10 scroll-area-custom'>
                      <RecommendFilters />
                      <AirlinesFilter />
                      <StopsFilters />
                      <AcardionFilters />
                    </ScrollArea>
                  </SheetContent>
                </Sheet>
                </div>
              {/* Mobile version */}
              <FlightTable />            
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Flights

  export const getStaticProps = (async (context) => {
    return {
      props: {
        messages: (await import(`../../messages/${context.locale}.json`)).default,
      },
    };
  }) satisfies GetStaticProps;
