import Image from "next/image"
import { Card, CardContent, CardTitle } from "../ui/card"

const Discounts = () => {
  return (
    <Card className="border-none mt-8 p-4">
        <CardTitle className="text-xl text-[#0f294d] mb-6">Stay Discounts</CardTitle>
        <CardContent>
            <ul>
                <li className="flex flex-col items-center gap-y-2">
                    <Image src="https://static.tripcdn.com/packages/flight/flight-x-product/1.0.30/images/complete/hotelCross/pic_coupon.png" width={100} height={50} alt="discount" />
                    <p>New Hotel Guest Promo Code</p>
                    <span>8% off (up to $10.00)</span>
                </li>
            </ul>
        </CardContent>
    </Card>
  )
}

export default Discounts