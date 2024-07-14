import React from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'
import { Sticker } from 'lucide-react'

const Insurance = () => {
  return (
    <Card>
        <CardHeader className='flex jus'>
            <div>
                <CardTitle>Trip.com Travel Insurance</CardTitle>
                <p>Protect Your Journey With Travel Insurance</p>
            </div>
            <Sticker />
        </CardHeader>
    </Card>
  )
}

export default Insurance