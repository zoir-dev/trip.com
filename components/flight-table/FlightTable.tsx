import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

import Departing from '../departing/Departing';
import ShortPrices from '../short-prices/ShortPrices';
import FlightTime from '../flight-time/FlightTime';


function FlightTable() {
  return (
    <ScrollArea className='w-full'>
      <Departing/>
      <ShortPrices/>
      <FlightTime/>
    </ScrollArea>
  );
}

export default FlightTable;




