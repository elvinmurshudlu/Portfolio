import { Box, Chip, Grid, Typography } from '@mui/material'
import React from 'react'
import { IExperience } from '../Interface/Project'





export default function Experience({content}:{content:IExperience}) {
  return (
        <Grid data-aos="fade-up" container spacing={2} >
            <Grid item xs={4} sx={{display:"flex",alignItems:"center"}}>
                <Typography color="#ABB2BF">{content.time}</Typography>
            </Grid>
            <Grid item xs={8} >
                <Typography variant='h5'>{content.header}</Typography>
                <Typography gutterBottom color="#ABB2BF" variant='subtitle2'> 
                    {content.content}
                </Typography>
                <Box  sx={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
                        {content.chip && content.chip?.map((chip)=>(
                            <Chip sx={{backgroundColor:"#C778DD"}} label={chip} color='success'></Chip>

                        ))}                    
                </Box>
            </Grid>
        </Grid>
    )
}

// export default function Experience() {
//     return (
//           <Grid container spacing={2} >
//               <Grid item xs={4}>
//                   <Typography color="#ABB2BF">25 April 2023 -- Now</Typography>
//               </Grid>
//               <Grid item xs={8} >
//                   <Typography variant='h5'>Mentor</Typography>
//                   <Typography gutterBottom color="#ABB2BF" variant='subtitle2'> 
//                       Advanced Front end developer Mentor in Coders Azerbaijan
//                   </Typography>
//                   <Box  sx={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
//                       <Chip sx={{backgroundColor:"#C778DD"}} label="Prettier" color='success'></Chip>
//                       <Chip sx={{backgroundColor:"#C778DD"}} label="Jest" color='success'></Chip>
//                       <Chip sx={{backgroundColor:"#C778DD"}} label="React testing library" color='success'></Chip>
//                       <Chip sx={{backgroundColor:"#C778DD"}} label="Typescript" color='success'></Chip>
//                       <Chip sx={{backgroundColor:"#C778DD"}} label="Material UI" color='success'></Chip>
//                       <Chip sx={{backgroundColor:"#C778DD"}} label="Micro Frontend" color='success'></Chip>
//                   </Box>
//               </Grid>
//           </Grid>
//       )
//   }
  
