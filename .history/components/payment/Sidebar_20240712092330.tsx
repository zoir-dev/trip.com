import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Sidebar = () => {
  return (
    <Card className="w-full max-w-[32%]">
      <CardTitle>Price Details</CardTitle>
      <CardDescription>All prices are in US dollars</CardDescription>
      <CardContent>

      </CardContent>
    </Card>
  )
}

export default Sidebar