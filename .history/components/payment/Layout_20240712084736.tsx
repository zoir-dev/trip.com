import React, { ReactNode } from 'react'

const Layout = ({chidren} : {chidren : ReactNode}) => {
  return (
    <div>
        {chidren}
        <footer>footer</footer>
    </div>
  )
}

export default Layout