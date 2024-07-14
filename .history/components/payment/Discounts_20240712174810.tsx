import Image from "next/image"
import { Card, CardContent, CardTitle } from "../ui/card"

const Discounts = () => {
  return (
    <Card className="border-none mt-8 p-4">
        <CardTitle className="text-xl text-[#0f294d]">Stay Discounts</CardTitle>
        <CardContent>
            <ul>
                <li>
                    <Image src="https://static.tripcdn.com/packages/flight/flight-x-product/1.0.30/images/complete/hotelCross/pic_coupon.png" width={24} height={24} alt="discount" />
                </li>
            </ul>
        </CardContent>
    </Card>
  )
}

export default Discounts