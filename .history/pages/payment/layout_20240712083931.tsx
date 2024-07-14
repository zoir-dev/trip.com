import React, { ReactNode } from 'react'

const PaymentLayout = ({chidren} : {chidren : ReactNode}) => {
  return (
    <div>
        {chidren}
        Payment Page
    </div>
  )
}

export default PaymentLayout