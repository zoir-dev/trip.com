import React from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'
import { cn } from '@/lib/utils'

const YoutTickets = () => {
  return (
    <Card className='mt-8'>
        <CardHeader className={cn("flex f p-6")}>
            <CardTitle>Yout Tickets</CardTitle>
            <a href="#baggageAllowance">Details</a>
        </CardHeader>
    </Card>
  )
}

export default YoutTickets