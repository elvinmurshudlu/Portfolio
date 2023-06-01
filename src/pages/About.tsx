import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import PageHeader from '../components/PageHeader'
import Experience from '../components/Experience'
import { IExperience } from '../Interface/Project'
import Skills from '../container/Skills'
import Educations from '../container/Educations'
import Experiences from '../container/Experiences'
import WhoAmI from '../container/WhoAmI'

export default function About() {

 








  return (
      <Box sx={{padding:"0 0 20px 0",display:"flex",flexDirection:"column",rowGap:"30px"}}>
        <WhoAmI></WhoAmI>
        <Skills></Skills>
        <Experiences></Experiences>
        <Educations></Educations>
        
      </Box>
    )
}
