import { Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import NavbarUl from './NavbarUl';
import { useLocation,Link } from 'react-router-dom';
import { githubLink, linkednLink } from '../constants/urls';


import {GitHub} from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function MobileMenu() {
    

    const [isOpen,setIsOpen] = useState(false)
    const location = useLocation()

    useEffect(()=>{
      if(isOpen){
        document.body.style.overflowY  = "hidden"
      }else{
        document.body.style.overflowY  = "scroll"
      }
    },[isOpen])

    useEffect(()=>{
        setIsOpen(false)
    },[location.pathname])

  return (
        <>
        <IconButton sx={{display:{sx:"flex",md:"none"}}} onClick={()=>setIsOpen(!isOpen)} ><MenuIcon sx={{color:"white"}}></MenuIcon></IconButton>
        <Box sx={{width:"100%",height:isOpen ? "100vh":"0",position:"absolute",backgroundColor:"#282C33",top:"100%",left:"0",zIndex:"2",transition:"0.3s",overflow:"hidden",display:"flex",flexDirection:"column",rowGap:"60px"}}>
            <Box sx={{padding:"30px 0"}}>
              <NavbarUl isMobile={true}></NavbarUl>

              
            </Box>

            <Box component="div" sx={{width:"100%",textAlign:"center"}}>
                    
              <IconButton component={Link} to={githubLink} target='_blank' ><GitHub sx={{color:"#ABB2BF",fontSize:"60px"}}></GitHub></IconButton>
                            <IconButton component={Link} to={linkednLink} target='_blank'><LinkedInIcon sx={{color:"#ABB2BF",fontSize:"60px"}}></LinkedInIcon></IconButton>
              </Box>

        </Box>
        </>

  )
}
