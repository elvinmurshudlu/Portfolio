import React from 'react'
import PageHeader from '../components/PageHeader'
import { Box, Typography } from '@mui/material'

export default function WhoAmI() {
  return (
    <Box component="section">
     <PageHeader content='Who am i?' header='about-me' symbol='/'></PageHeader>
        <Typography gutterBottom  variant='subtitle2'>i'm Elvin Murshudlu. I have completed Front-end Bootcamp in the Coders Azerbaijan . I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </Typography>
      
    </Box>
  )
}
