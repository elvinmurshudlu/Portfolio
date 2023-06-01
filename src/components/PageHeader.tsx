import { Box, Typography } from '@mui/material'
import React from 'react'

export default function PageHeader({header,content,symbol}:{header:string,content?:string,symbol:string}) {
  return (
        <Box sx={{marginBottom:"20px"}}>
            <Typography gutterBottom variant='h4'><Box component="span" color="#C778DD">{symbol}</Box>{header}</Typography>
            <Typography variant='subtitle2' color="#ABB2BF">{content}</Typography>
        </Box>
    )
}
