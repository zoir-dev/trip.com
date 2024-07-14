import Image from "next/image"
import { Card, CardContent, CardTitle } from "../ui/card"

const Discounts = () => {
  return (
    <Card>
        <CardTitle>Stay Discounts</CardTitle>
        <CardContent>
            <ul>
                <li>
                    <Image src="https://static.tripcdn.com/packages/flight/flight-x-product/1.0.30/images/complete/hotelCross/pic_coupon.png" alt="discount" />
                </li>
            </ul>
        </CardContent>
    </Card>
  )
}

export default Discounts