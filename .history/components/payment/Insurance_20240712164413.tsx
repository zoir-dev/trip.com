import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Check, Sticker } from 'lucide-react'

const Insurance = () => {
  return (
    <Card>
        <CardHeader className='flex justify-between gap-x-4 '>
            <div className='flex flex-col gap-y-1'>
                <CardTitle className='text-[#0f294d] text-xl '>Trip.com Travel Insurance</CardTitle>
                <p className='text-[#8592a6] text-[14px] p-0'>Protect Your Journey With Travel Insurance</p>
            </div>
            <Sticker />
        </CardHeader>
        <CardContent>
            <div>
                <span className='flex items-center justify-between'>
                    <CardTitle>Add Travel Protection From AXA</CardTitle>
                    <input type="checkbox" className='form-radio' />
                </span>
                <ul>
                    <li>
                      <Check className='text-[#06aebd]' />
                      <span className='text-[#0f294d] text-[14px] flex ite'>Trip Cancellation and Interruption Coverage - up to <p className='text-[#06aebd]'> 100% of trip cost (max. $10,000 per person)</p></span>
                    </li>
                </ul>
            </div>
        </CardContent>
    </Card>
  )
}

export default Insurance