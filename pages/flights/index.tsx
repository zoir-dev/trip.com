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

function Flights() {
  return (
    <div className='bg-[#F0F2F4] h-full'>
      <div className='container'>
        <div className='pt-20'>
          <DateCarusel/>
          <div className='mt-10 md:flex gap-2'>
            {/* Desktop version */}
            <ScrollArea className='md:block hidden scroll-area-custom w-[30%]'>
              <RecommendFilters/>
              <AirlinesFilter/>
              <StopsFilters/>
              <AcardionFilters/>
            </ScrollArea>
            {/* Desktop version */}

            {/* Mobile version */}
            <div className='md:hidden block w-full mb-5'>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Filters</Button>
                </SheetTrigger>
                <SheetContent className='h-full overflow-auto'>
                  <ScrollArea className='py-10 scroll-area-custom'>
                    <RecommendFilters/>
                    <AirlinesFilter/>
                    <StopsFilters/>
                    <AcardionFilters/>
                  </ScrollArea>
                </SheetContent>
              </Sheet>
            </div>
            {/* Mobile version */}
            <FlightTable/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flights
