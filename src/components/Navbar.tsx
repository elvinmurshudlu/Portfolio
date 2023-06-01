import {  Box, } from '@mui/material'
import Logo from './Logo'
import NavbarUl from './NavbarUl'

export default function Navbar() {



  return (
        <Box component="nav" sx={{display:"flex",justifyContent:"space-between",padding:"32px 0 0 0"}}>
            <Logo></Logo>

            <NavbarUl ></NavbarUl>

        </Box>
    )
}
