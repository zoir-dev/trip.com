import React from 'react'
import { Card, CardDescription, CardTitle } from '../ui/card'

const Sidebar = () => {
  return (
    <Card className="w-full max-w-[32%]">
      <CardTitle>Price Details</CardTitle>
      <CardDescription>All prices are in US dollars</CardDescription>
    </Card>
  )
}

export default Sidebar