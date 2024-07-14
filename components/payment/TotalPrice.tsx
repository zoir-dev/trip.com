import React from 'react'
import { Button } from '../ui/button'
import { usePromoCode } from '@/hooks/PromoProvider'

const TotalPrice = () => {

    const { promoCode } = usePromoCode()

    const handleClick = () => {
        console.log(promoCode)
    }

  return (
    <div className='flex flex-col gap-y-4 mb-16'>
        <div className='flex items-center justify-between'>
            <h3 className='text-primary text-2xl font-bold'>Total</h3>
            <b className='text-xl text-primary'>$165.70</b>
        </div>
        <Button className='bg-primary w-full  text-xl py-6' onClick={handleClick}>Next</Button>
    </div>
  )
}

export default TotalPrice