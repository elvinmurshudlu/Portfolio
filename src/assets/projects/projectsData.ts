import { IProject } from "../../Interface/Project";
import internet from "../projects/images/internetBanking.png"

export   const apps:IProject[] = [{
    header:"React Node.js MySql MaterialUI Redux-Toolkit Typescript ",
    title:"Internet Banking",
    content:"Coders Azerbaijan Final project (Temporary private)",
    buttons:[
        {
            name:"github",
            link:"",
            status:false,
            disabled:true
        },
        
    ],
    status:"On Going",
    image:internet


}] 

export const simpleProjects :IProject[] = [
    {
        header:"Angular Angular-Material",
        title:"Movie App",
        content:"Simple responsive Movie app , Angular Material was used",
        buttons:[
            {
                name:"github",
                link:"https://github.com/elvinmurshudlu/Movie-App-Angular-",
                status:true,
                disabled:false
            },
            {
                name:"live",
                link:"https://movie-app-angular-p79f.vercel.app/",
                status:false,
                disabled:false
            },
        ],
    
    
    },
    {
        header:"React Redux-Toolkit Json-server",
        title:"eCommerce",
        content:"Simple ecommerce app ",
        buttons:[
            {
                name:"github",
                link:"https://github.com/elvinmurshudlu/eCommerce",
                status:true,
                disabled:false
            },
            {
                name:"live",
                link:"",
                status:false,
                disabled:true
            },
        ],
        status:"Not Deployed"
    
    
    },
    {
        header:"HTML SCSS JS",
        title:"Music player",
        content:"Music player web site, login/register using localstorage (in beginner)",
        buttons:[
            {
                name:"github",
                link:"https://github.com/elvinmurshudlu/DJOZ",
                status:true,
                disabled:false
            },
            {
                name:"live",
                link:"https://elvinmurshudlu.github.io/DJOZ/",
                status:false,
                disabled:false
            },
        ],
    
    
    }
    ,
    {
        header:"HTML SCSS JS",
        title:"Scissors game",
        content:"Scissors game , 3 player available (1 vs 2 Bot)",
        buttons:[
            {
                name:"github",
                link:"https://github.com/elvinmurshudlu/scissorsGame",
                status:true,
                disabled:false
            },
            {
                name:"live",
                link:"https://elvinmurshudlu.github.io/scissorsGame/game",
                status:false,
                disabled:false
            },
        ],
    
    
    },
    {
        header:"HTML SCSS JS",
        title:"Video player",
        content:"Only focused logic",
        buttons:[
            {
                name:"github",
                link:"https://github.com/elvinmurshudlu/videoTube",
                status:true,
                disabled:false
            },
            {
                name:"live",
                link:"https://elvinmurshudlu.github.io/videoTube/",
                status:false,
                disabled:false
            },
        ],
    
    
    },
    {
        header:"HTML SCSS JS",
        title:"Repeat",
        content:"Repeater event listener, Example: Instagram unfollow/follow all users one click. Usage --> paste code to console ",
        buttons:[
            {
                name:"github",
                link:"https://github.com/elvinmurshudlu/Repeat",
                status:true,
                disabled:false
            }
        ],
    
    
    },
    {
        header:"HTML SCSS JS ",
        title:"Load more button",
        content:"Fetch random images and load more by clicking button ",
        buttons:[
            {
                name:"github",
                link:"https://github.com/elvinmurshudlu/infinityScrollButton",
                status:true,
                disabled:false
            },{
                name:"live",
                link:"https://elvinmurshudlu.github.io/infinityScrollButton/",
                status:true,
                disabled:false
            },
        ],
    
    
    }
]