import React from 'react'
import { Button } from '../ui/button'

const TotalPrice = () => {

    const { promo }

  return (
    <div>
        <div className='flex items-center justify-between'>
            <h3 className='text-[#0f294d] text-xl'>Total</h3>
            <b className='text-xl text-[#0f294d]'>$165.70</b>
        </div>
        <Button>Next</Button>
    </div>
  )
}

export default TotalPrice