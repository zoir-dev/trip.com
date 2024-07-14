import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function BookCard() {
  return (
    <div className='p-5 border bg-white rounded-sm'>
        <h2 className='font-sans text-xl font-bold'>Economy Class</h2>
        <hr className='mt-2' /> 
        <p className='font-sans font-semibold text-base mt-5'>Baggage</p>
        <HoverCard>
            <HoverCardTrigger className='cursor-pointer hover:text-primary'>
                <div  className='flex items-center gap-2 '>
                    <Image src={"/icons/baggage.png"} alt='baggage' width={20} height={20} className='mt-2'/>
                    <p>Carry-on baggage: <span className='font-bold'>Included</span></p>            
                </div>
                <div  className='flex items-center gap-2'>
                    <Image src={"/icons/baggages.png"} alt='baggage' width={20} height={20} className='mt-2'/>
                    <p>Chacked Baggage: <span className='font-bold'>30 kg</span></p>            
                </div>
            </HoverCardTrigger>
            <HoverCardContent className='w-72'>
                <div  className='flex items-center gap-2'>
                    <Image src={"/icons/baggage.png"} alt='baggage' width={20} height={20} className='mt-2'/>
                    <p>Carry-on baggage: Included</p>            
                </div>
                <div  className='flex items-center gap-2'>
                    <Image src={"/icons/baggages.png"} alt='baggage' width={20} height={20} className='mt-2'/>
                    <p>Chacked Baggage: 30 kg</p>            
                </div>
            </HoverCardContent>
        </HoverCard>               
        <p className='font-sans font-semibold text-base mt-5'>Fare Rules</p>
        <HoverCard>
            <HoverCardTrigger className='cursor-pointer hover:text-primary'>
                <div  className='flex items-center gap-2 '>
                    <Image src={"/icons/coin.png"} alt='baggage' width={20} height={20} className='mt-2'/>
                    <p>Cancellation fee: <span className='font-bold'>$42.00</span></p>            
                </div>
                <div  className='flex items-center gap-2'>
                    <Image src={"/icons/coin.png"} alt='baggages' width={20} height={20} className='mt-2'/>
                    <p>Change fee: <span className='font-bold'>0.00</span></p>            
                </div>
            </HoverCardTrigger>
            <HoverCardContent className='w-72'>
            <div  className='flex items-center gap-2 '>
                    <Image src={"/icons/coin.png"} alt='baggage' width={20} height={20} className='mt-2'/>
                    <p>Cancellation fee: $42.00</p>            
                </div>
                <div  className='flex items-center gap-2'>
                    <Image src={"/icons/coin.png"} alt='baggages' width={20} height={20} className='mt-2'/>
                    <p>Change fee: 0.00</p>            
                </div>
            </HoverCardContent>
        </HoverCard>   
        <h2 className='mt-5 font-sans font-bold text-xl'>$1,356</h2>
        <Button className='mt-3 w-full'>Book</Button>            
    </div>
  )
}

export default BookCard