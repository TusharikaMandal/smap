import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import SideNavbar from './SideNavbar'

function Layout() {
  return (
    <main>
      <Navbar/>
      <SideNavbar/>
      <Outlet/>
    </main>
  )
}

export default Layout
