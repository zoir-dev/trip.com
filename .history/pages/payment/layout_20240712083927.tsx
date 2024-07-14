import React, { ReactNode } from 'react'

const PaymentLayout = ({chidren} : {chidren : ReactNode}) => {
  return (
    <div>
        {chidren}
        P
    </div>
  )
}

export default PaymentLayout