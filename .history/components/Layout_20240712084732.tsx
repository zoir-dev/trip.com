import React, { ReactNode } from 'react'

const Layout = ({chidren} : {chidren : ReactNode}) => {
  return (
    <div>
        {chidren}
    </div>
  )
}

export default Layout