import React from 'react'
import PageHeader from '../components/PageHeader'
import { Box, Grid } from '@mui/material'

export default function Skills() {
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
    <Box component="section">
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
    </Box>
  )
}
