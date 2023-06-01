import { Box, Button, Grid, Typography } from '@mui/material'
import profile from "../assets/images/Profile.png"
import status from "../assets/images/Status.svg"

export default function Introduce() {
  return (
    <Grid container component="section">
            <Grid item xs={12} md={6} sx={{display:"flex",flexDirection:"column",fontSize:"32px",justifyContent:"center"}}>

                <Box component="div">
                    I'm Elvin Murshudlu
                </Box>

                    
                <Box sx={{marginBottom:"15px"}} component="div" color="#C778DD
">
                   Front-end Developer
                </Box>
                

                <Typography sx={{marginBottom:"20px"}} gutterBottom color="#ABB2BF" variant='subtitle2'>Crafts responsive websites where technologies meet creativity
                

                
                </Typography>


                <Box>
                <Button variant='text' sx={{border:"1px solid #C778DD ",color:"white",padding:"8px 16px"}}>Contact me</Button>

                </Box>

            </Grid>
            <Grid item xs={12} md={6} sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <img src={profile}></img>
                <Box sx={{padding:"5px",border:"1px solid white",color:"#ABB2BF",display:"flex",alignItems:"center",columnGap:"5px"}}><img src={status}></img> Currently working on <Box component="span" color="white">Portfolio</Box></Box>
            </Grid>
        </Grid>
  )
}
