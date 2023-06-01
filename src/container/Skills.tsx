import React from 'react'
import PageHeader from '../components/PageHeader'
import { Box, Grid } from '@mui/material'
import SkillItem from '../components/SkillItem'

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
            <SkillItem data={data}></SkillItem>
          ))}
        </Grid>
    </Box>
  )
}
