import Image from "next/image"
import { Card, CardContent, CardTitle } from "../ui/card"

const Discounts = () => {
  return (
    <Card className="border-none mt-8 p-4">
        <CardTitle className="text-xl text-[#0f294d] mb-6">Stay Discounts</CardTitle>
        <CardContent>
            <ul className="flex jus">
                <li className="flex flex-col items-center gap-y-2">
                    <Image src="https://static.tripcdn.com/packages/flight/flight-x-product/1.0.30/images/complete/hotelCross/pic_coupon.png" width={100} height={100} alt="discount" />
                    <p className="text-[#0f294d] text-[14px]">New Hotel Guest Promo Code</p>
                    <span className="text-[#c15400] font-semibold text-[14px]">8% off (up to $10.00)</span>
                </li>

                <li className="flex flex-col items-center gap-y-2">
                    <Image src="https://static.tripcdn.com/packages/flight/flight-x-product/1.0.30/images/complete/hotelCross/pic_coupon.png" width={100} height={100} alt="discount" />
                    <p className="text-[#0f294d] text-[14px]">New Hotel Guest Promo Code</p>
                    <span className="text-[#c15400] font-semibold text-[14px]">8% off (up to $10.00)</span>
                </li>

                <li className="flex flex-col items-center gap-y-2">
                    <Image src="https://static.tripcdn.com/packages/flight/flight-x-product/1.0.30/images/complete/hotelCross/pic_coupon.png" width={100} height={100} alt="discount" />
                    <p className="text-[#0f294d] text-[14px]">New Hotel Guest Promo Code</p>
                    <span className="text-[#c15400] font-semibold text-[14px]">8% off (up to $10.00)</span>
                </li>
            </ul>
        </CardContent>
    </Card>
  )
}

export default Discounts