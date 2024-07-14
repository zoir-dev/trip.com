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
            <h3 className='text-[#0f294d] text-[24px] font-bold'>Total</h3>
            <b className='text-xl text-[#0f294d]'>$165.70</b>
        </div>
        <Button variant='link' className='w-full text-[#fff] text-xl py-6' onClick={handleClick}>Next</Button>
    </div>
  )
}

export default TotalPrice