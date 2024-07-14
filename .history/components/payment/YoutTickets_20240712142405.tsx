import React from 'react'
import { Card, CardHeader,  } from '../ui/card'

const YoutTickets = () => {
  return (
    <Card className='mt-8'>
        <CardHeader className='flex'>
            <>Yout Tickets</>
            <a href="#baggageAllowance">Details</a>
        </CardHeader>
    </Card>
  )
}

export default YoutTickets