import React, { ReactNode } from 'react'

const Layout = ({chidren} : {chidren : ReactNode}) => {
  return (
    <div>
        {chidren}
        Payment Page
    </div>
  )
}

export default PaymentLayout