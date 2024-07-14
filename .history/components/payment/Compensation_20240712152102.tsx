import React from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'

const Compensation = () => {
  return (
    <Card className='mt-8'>
        <CardHeader>
            <div>
                <CardTitle className='text-xl text-[]'>Compensation for Flight Delays With AirHelp Plus</CardTitle>
                <p>Worried your flight(s) could be delayed or canceled? AirHelp supports you 24/7 and helps you claim the compensation you're entitled to afterwards.</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-pen"><path d="M11.5 15H7a4 4 0 0 0-4 4v2"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="7" r="4"/></svg>
        </CardHeader>
    </Card>
  )
}

export default Compensation