import { Box, Grid } from '@mui/material'
import React from 'react'
import PageHeader from './PageHeader'
import ProjectItem from './ProjectItem'
import { IProject } from '../Interface/Project'

export default function ProjectContainer({header,projects}:{header:string,projects:IProject[]}) {

    // const projects:IProject[] = [{
    //     header:"React Node.js MySql MaterialUI Redux-Toolkit Typescript ",
    //     title:"Internet Banking",
    //     content:"Coders Azerbaijan Final project (Temporary private)",
    //     buttons:[
    //         {
    //             name:"github",
    //             link:"",
    //             status:false,
    //             disabled:true
    //         },
            
    //     ],
    //     // status:"On Going"


    // },{
    //     header:"React Node.js MySql MaterialUI Redux-Toolkit ",
    //     title:"Internet Banking",
    //     content:"Coders Azerbaijan Final project (Temporary private)",
    //     buttons:[
    //         {
    //             name:"github",
    //             link:"",
    //             status:false,
    //             disabled:true
    //         },
            
    //     ],
    //     // status:"On Going"


    // },{
    //     header:"React Node.js MySql MaterialUI Redux-Toolkit ",
    //     title:"Internet Banking",
    //     content:"Coders Azerbaijan Final project (Temporary private)",
    //     buttons:[
    //         {
    //             name:"github",
    //             link:"",
    //             status:false,
    //             disabled:true
    //         },
            
    //     ],
    //     // status:"On Going"


    // },{
    //     header:"React Node.js MySql MaterialUI Redux-Toolkit ",
    //     title:"Internet Banking",
    //     content:"Coders Azerbaijan Final project (Temporary private)",
    //     buttons:[
    //         {
    //             name:"github",
    //             link:"",
    //             status:false,
    //             disabled:true
    //         },
            
    //     ],
    //     // status:"On Going"


    // },{
    //     header:"React Node.js MySql MaterialUI Redux-Toolkit  ",
    //     title:"Internet Banking",
    //     content:"Coders Azerbaijan Final project (Temporary private)",
    //     buttons:[
    //         {
    //             name:"github",
    //             link:"",
    //             status:false,
    //             disabled:true
    //         },
            
    //     ],
    //     // status:"On Going"


    // },]



  return (
    <Box>
        <PageHeader  header={header} symbol='#'></PageHeader>
        <Grid container spacing={2}>
            {
                projects.map((project,index)=>(
                    <Grid  key={index} item xs={12} sm={6} md={4}>
                             <ProjectItem content={project}></ProjectItem>
                    </Grid>
                ))
            }
            

        </Grid>
    </Box>
  )
}
