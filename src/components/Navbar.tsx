import {  Box } from '@mui/material'
import Logo from './Logo'
import NavbarUl from './NavbarUl'
import MobileMenu from './MobileMenu'

export default function Navbar() {

    



  return (
        <Box component="nav" sx={{display:"flex",justifyContent:"space-between",padding:"32px 0 0 0",position:"relative"}}>
            <Logo></Logo>

            <NavbarUl ></NavbarUl>

            <MobileMenu></MobileMenu>

        </Box>
    )
}
