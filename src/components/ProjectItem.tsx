import { Box, Button, Chip, Typography } from '@mui/material'
import React from 'react'
import { IProject } from '../Interface/Project'
import {Link} from "react-router-dom"

export default function ProjectItem({content}:{content:IProject}) {
  return (
        <Box component="div" sx={{cursor:"pointer"}} >
            {content.image  && <Box sx={{border:"1px solid #ABB2BF"}}><img style={{width:"100%"}} src={content?.image}></img></Box>}

            <Box sx={{border:"1px solid #ABB2BF",padding:"6px 10px",color:"#C778DD"}}  >{content.header}
            
            
            
            </Box>

            <Box sx={{border:"1px solid #ABB2BF",padding:"16px"}}>
                <Typography gutterBottom variant='h5'>{content.title}   {content.status && <Chip label={content.status} color='primary'></Chip>}</Typography>
                <Typography gutterBottom  variant='subtitle2' color="#ABB2BF">{content.content}</Typography>

                <Box sx={{display:"flex",gap:"10px",marginBottom:"5px",flexWrap:"wrap"}}>
                    {content.buttons.map((button,index)=>(
                        <Button key={index} component={Link} disabled={button.disabled}  to={button.link} target='_blank' sx={{border:`1px solid ${button.status ? "#C778DD" : "grey"} `,color:"white",padding:"6px 16px"}} variant='text'>{button.name}</Button>
                    ))}
                </Box>
                
            </Box>


        </Box>
    )
}
