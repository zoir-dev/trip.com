import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Sticker } from 'lucide-react'

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
                <span>
                    <CardTitle>Add Travel Protection From AXA</CardTitle>
                    <input type="checkbox" className='w-5 h-5 form-radio' />
                </span>
            </div>
        </CardContent>
    </Card>
  )
}

export default Insurance