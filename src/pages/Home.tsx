import { Box, Button, Grid, Typography } from '@mui/material'
import profile from "../assets/images/Profile.png"
import status from "../assets/images/Status.svg"
import Introduce from '../components/Introduce'

export default function Home() {
  return (
    <Box component="main">
        <Introduce ></Introduce>
    </Box>
  )
}
