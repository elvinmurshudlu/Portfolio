import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import PageHeader from '../components/PageHeader'
import Experience from '../components/Experience'

export default function About() {

  const datas = [{
    "header":"Programming-languages",
    "content":"Javascript (Typescript) Python Java(beginner) "

  },
  {
    "header":"Other",
    "content":"HTML5 CSS SCSS Node.js Bootstrap Material-Ui RestApi"

  },
  {
    "header":"Tools",
    "content":"VSCode Linux"

  },
  {
    "header":"DataBases",
    "content":"MySql-(with Sequelize)"

  },
  {
    "header":"Frameworks",
    "content":"React  Angular Express.js "

  },
  {
    "header":"Testing",
    "content":"Jest React-testing-library"

  }
]



  return (
      <Box sx={{padding:"0 0 20px 0"}}>
        <PageHeader content='Who am i?' header='about-me' symbol='/'></PageHeader>
        <Typography gutterBottom  variant='subtitle2'>i'm Elvin Murshudlu. I have completed Front-end Bootcamp in the Coders Azerbaijan . I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </Typography>
      
        <PageHeader header='skills' symbol='#'></PageHeader>
        <Grid sx={{marginBottom:"30px"}} container spacing={2}>
          {datas.map((data)=>(
            <Grid item xs={6} sm={4} md={3}>
            <Box sx={{cursor:"pointer"}}>
              <Box sx={{border:"1px solid white",padding:"16px"}}>{data.header}</Box>
              <Box  sx={{border:"1px solid white",padding:"16px",color:"#ABB2BF"}}>{data.content}</Box>

            </Box>
          </Grid>
          ))}
        </Grid>

        <PageHeader header='experience' symbol='#' ></PageHeader>
            
            <Grid container>
              <Grid item xs={12} md={6}>
                  <Experience></Experience>

              </Grid>
            </Grid>
      </Box>
    )
}
