import React from 'react'

const PaymentStipper = () => {
  return (
    <div>
        <ul className='flex items-center justify-around py-4'>
            <li className=''>
                <span className='flex items-center justify-center rounded-[50%] border-2 p-2 w-[30px] h-[30px]  bg-gray-200 border-gray-200'>1</span>
                <p>Passenger Info</p>
            </li>
            <li className='flex flex-col justify-center items-center'>
                <span className='flex items-center justify-center rounded-[50%] border-2 p-2 w-[30px] h-[30px]  bg-gray-200 border-gray-200'>2</span>
                <p>Top Sellers</p>
            </li>
            <li className='flex flex-col justify-center items-center'>
                <span className='flex items-center justify-center rounded-[50%] border-2 p-2 w-[30px] h-[30px]  bg-gray-200 border-gray-200'>3</span>
                <p className='text-center'>Select Add-ons</p>
            </li>
            <li className='flex flex-col justify-center items-center gap-y-2'>
                <span className='flex items-center justify-center rounded-[50%] border-2 p-2 w-[30px] h-[30px]  bg-gray-200 border-gray-200'>4</span>
                <p className='text-center'>Pay</p>
            </li>
        </ul>
    </div>
  )
}

export default PaymentStipper