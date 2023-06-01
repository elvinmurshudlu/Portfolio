import { Box, Grid } from '@mui/material'
import React from 'react'

export default function SkillItem({data}:{data:any}) {
  return (
    <Grid data-aos="fade-right" item xs={6} sm={4} md={3}>
            <Box sx={{cursor:"pointer"}}>
              <Box sx={{border:"1px solid white",padding:"16px"}}>{data.header}</Box>
              <Box  sx={{border:"1px solid white",padding:"16px",color:"#ABB2BF"}}>{data.content}</Box>

            </Box>
          </Grid>
  )
}
