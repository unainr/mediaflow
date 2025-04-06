import { NavbarDemo } from '@/components/header/NavbarDemo'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    {/* <Navbar/> */}
    <NavbarDemo/>
    {children}
    </>
  )
}

export default layout