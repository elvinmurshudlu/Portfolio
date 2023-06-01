import { Box } from '@mui/material'
import logo from "../assets/images/Logo.svg"

export default function Logo() {
  return (
    <Box component="span" sx={{display:"flex",alignItems:"center",gap:"5px",cursor:"pointer"}}>
                <img src={logo}></img>Elvin
    </Box>
  )
}
