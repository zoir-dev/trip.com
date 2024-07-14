import React, { ReactNode } from 'react'

const layout = ({chidren} : {chidren : ReactNode}) => {
  return (
    <div>
        {chidren}
        Payment Page
    </div>
  )
}

export default PaymentLayout