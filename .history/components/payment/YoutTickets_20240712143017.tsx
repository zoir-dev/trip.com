import React from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'
import { cn } from '@/lib/utils'

const YoutTickets = () => {
  return (
    <Card className='mt-8'>
        <CardHeader className={cn("flex items-center justify-between")}>
            <CardTitle className={cn("text-xl ")}>Yout Ticket(s)</CardTitle>
            <a href="#baggageAllowance">Details</a>
        </CardHeader>
    </Card>
  )
}

export default YoutTickets