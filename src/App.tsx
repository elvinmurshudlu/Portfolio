import {  Box, Stack } from '@mui/material'
import React from 'react'
import { Outlet, RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <Stack justifyContent="space-between" sx={{padding:{xs:"0 10px",md:"0 248px"},backgroundColor:"#282C33",minHeight:"100vh",color:"white"}}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </Stack>
  )

}
