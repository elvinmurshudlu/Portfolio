import React from 'react'
import PageHeader from '../components/PageHeader'
import { Box, Grid } from '@mui/material'
import Experience from '../components/Experience'
import { IExperience } from '../Interface/Project'

export default function Experiences() {

    const experiences:IExperience[] = [{
        time:"25 April 2023 - Now",
        header:"Mentor",
        content:"Advanced Front end developer Mentor in Coders Azerbaijan",
        chip:["Prettier","Jest","React testing library","Typescript","Material UI"]
      }]
      
  return (
        <Box component="section">
        
        <PageHeader header='experience' symbol='#' ></PageHeader>
            
            <Grid container>
              {experiences.map((experience)=>(
                <Grid item xs={12} md={6}>

                    <Experience content={experience}></Experience>

                </Grid>
              ))}
            </Grid>

        </Box>
  )
}
