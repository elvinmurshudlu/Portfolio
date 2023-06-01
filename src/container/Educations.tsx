import React from 'react'
import PageHeader from '../components/PageHeader'
import { Box, Grid } from '@mui/material'
import Experience from '../components/Experience'
import { IExperience } from '../Interface/Project'

export default function Educations() {

    const educations:IExperience[] = [
        {
            time:"2022 - 2023",
            header:"Coders Azerbaijan",
            content:"Front-end Developer Bootcamp",
            chip:["HTML5","CSS","SCSS","Bootstrap","React","Redux Toolkit"]
        }
        ,

        
      {
        time:"2022 - now",
        header:"Master's degree",
        content:"Econometrics at UNEC"
      },{
        time:"2018 - 2022",
        header:"Bachelors",
        content:"I have completed my bachelor's degree in Finance at UNEC."
      },
      
      ]
  return (
    <Box component="section">
    <PageHeader header='educations' symbol='#'></PageHeader>
        <Grid container spacing={2}>
              {educations.map((experience)=>(
                <Grid item xs={12} md={6}>

                    <Experience content={experience}></Experience>

                </Grid>
              ))}
            </Grid>
    </Box>
  )
}
