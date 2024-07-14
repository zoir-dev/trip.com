import React from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'
import { cn } from '@/lib/utils'

const YoutTickets = () => {
  return (
    <Card className='mt-8 border-'>
        <CardHeader className={cn("flex items-center justify-between")}>
            <CardTitle className={cn("text-xl text-[#0f294d]")}>Yout Ticket(s)</CardTitle>
            <a href="#baggageAllowance" className='text-[#06aebd]'>Details</a>
        </CardHeader>
    </Card>
  )
}

export default YoutTickets