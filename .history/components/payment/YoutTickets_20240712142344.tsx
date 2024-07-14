import React from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'

const YoutTickets = () => {
  return (
    <Card className='mt-8'>
        <CardHeader className='flex items-center'>
            <CardTitle>Yout Tickets</CardTitle>
            <a href="#baggageAllowance">Details</a>
        </CardHeader>
    </Card>
  )
}

export default YoutTickets