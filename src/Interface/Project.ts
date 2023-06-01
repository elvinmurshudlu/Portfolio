export interface IProject{
    image?:string,
    header:string,
    title:string,
    content:string,
    status?:string,
    buttons:IButton[],
}

interface IButton{
    name:string,
    link:string,
    status:boolean,
    disabled:boolean
}

export interface IExperience{
    time:string
    header:string
    content:string
    chip?:string[]
}