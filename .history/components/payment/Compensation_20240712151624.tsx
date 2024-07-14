import React from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'

const Compensation = () => {
  return (
    <Card>
        <CardHeader>
            <div>
                <CardTitle>Compensation for Flight Delays With AirHelp Plus</CardTitle>
                <p>Worried your flight(s) could be delayed or canceled? AirHelp supports you 24/7 and helps you claim the compensation you're entitled to afterwards.</p>
            </div>
            <UserRoundPen />
        </CardHeader>
    </Card>
  )
}

export default Compensation