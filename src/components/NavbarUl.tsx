import { Box, List, ListItem,ListItemButton } from '@mui/material'
import React from 'react'
import { ROUTES } from '../routes/routes'
import { Link, useLocation } from 'react-router-dom'

export default function NavbarUl({isMobile = false}:{isMobile?:boolean}) {

    const location = useLocation()


  return (
        <List sx={{display:{xs:isMobile ?"block" : "none",md:"flex"},justifyContent:"space-between",gap:"20px",padding:"0"}}>

                {ROUTES.map((route,index)=>(
                    <ListItem key={index} sx={{padding:"0",whiteSpace:"nowrap",lineHeight:"55px"}}>
                        <ListItemButton sx={{fontSize:isMobile ? "30px" : "18px"}}  component={Link} to={route.path}>
                            <Box component="span" sx={{color:"#C778DD"}}>#</Box>
                            <Box component="span" sx={{color:route.path === location.pathname ? "#FFFFFF" :"#ABB2BF"}}>{route.title}</Box>
                            
                        </ListItemButton>
                    
                </ListItem>
                ))}                

            </List>
  )
}
