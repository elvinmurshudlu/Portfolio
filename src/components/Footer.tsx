import { Box, IconButton, Stack } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import {Link} from "react-router-dom"

import {GitHub} from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { githubLink, linkednLink } from '../constants/urls';

export default function Footer() {
  return (
            <Box component="footer" sx={{borderTop:"1px solid white",display:"flex",justifyContent:"space-between",flexWrap:"wrap",rowGap:"48px",padding:"32px 0"}}>
                    <Box >
                        <Stack direction="row" gap="15px">
                            <Logo></Logo>
                            <Box component="span" color="#ABB2BF">murshudlu.elvin@gmail.com</Box>
                        </Stack>
                        <br></br>
                        <Box component="span">Front-end Developer</Box>
                    </Box>

                    <Stack alignContent="start">
                        <Box component="span" fontSize="24px">Media</Box>
                        <Box component="span">
                            <IconButton component={Link} to={githubLink} target='_blank' ><GitHub sx={{color:"#ABB2BF"}}></GitHub></IconButton>
                            <IconButton component={Link} to={linkednLink} target='_blank'><LinkedInIcon sx={{color:"#ABB2BF"}}></LinkedInIcon></IconButton>
                        </Box>

                    </Stack>

                    <Box component="span" sx={{width:"100%",textAlign:"center"}}>© Copyright 2023. Made by Elvin</Box>

            </Box>
    )
}
