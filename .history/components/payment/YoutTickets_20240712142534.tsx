import React from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'
import { cn } from '@/lib/utils'

const YoutTickets = () => {
  return (
    <Card className='mt-8'>
        <CardHeader className={cn("flex-wrap space-y-1.5 p-6"), className}>
            <CardTitle>Yout Tickets</CardTitle>
            <a href="#baggageAllowance">Details</a>
        </CardHeader>
    </Card>
  )
}

export default YoutTickets