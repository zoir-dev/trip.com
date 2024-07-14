import React from 'react'
import { Button } from '../ui/button'
import { usePromoCode } from '@/hooks/PromoProvider'

const TotalPrice = () => {

    const { promoCode} = usePromoCode()

    const handleClick = () => {

  return (
    <div>
        <div className='flex items-center justify-between'>
            <h3 className='text-[#0f294d] text-xl'>Total</h3>
            <b className='text-xl text-[#0f294d]'>$165.70</b>
        </div>
        <Button onClick={handleClick}>Next</Button>
    </div>
  )
}

export default TotalPrice