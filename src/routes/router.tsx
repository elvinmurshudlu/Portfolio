import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import { PATH } from "../constants/paths"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import About from "../pages/About"
import Contacts from "../pages/Contacts"

export const router = createBrowserRouter([
    {
        path:PATH.home,
        element:<App></App>,
        children:[
            {
                path:PATH.home,
                element:<Home></Home>
            },
            {
                path:PATH.projects,
                element:<Projects></Projects>
            },
            {
                path:PATH.aboutme,
                element:<About></About>
            },
            {
                path:PATH.contacts,
                element:<Contacts></Contacts>
            }
        ]
        
    }
])