import { Box } from '@mui/material'
import React from 'react'
import PageHeader from '../components/PageHeader'
import ProjectContainer from '../components/ProjectContainer'
import { IProject } from '../Interface/Project'

import internet from "../assets/projects/images/internetBanking.png"
import { apps,simpleProjects } from '../assets/projects/projectsData'

export default function Projects() {



  return (
    <Box sx={{display:"flex",flexDirection:"column",rowGap:"40px",padding:"20px 0"}}>

      <PageHeader header='projects' content='List of my projects' symbol='/'></PageHeader>

      <ProjectContainer projects={apps} header='apps'></ProjectContainer>
      <ProjectContainer projects={simpleProjects} header='simple-projects'></ProjectContainer>
      

    </Box>
  )
}
