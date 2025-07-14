import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Java from './ChildElement/Java'
import Python from './ChildElement/Python'
import Mern from './ChildElement/Mern'
import NotFound from './NotFound'
import Navbar from './Navbar'
import Student from './Student'
import StudentDetail from './StudentDetail'

const MainFile = () => {
    let router=createBrowserRouter([
        {
            path:"/",
            element:<><Navbar/><Home/></>
        },
        {
            path:"/aboutus",
            element:<><Navbar/><About/></>
        },
        {
            path:"/services",
            element:<><Navbar/><Services/></>,
            children:[
                {
                    path:"javafs",
                    element:<Java/>
                },
                {
                    path:"pythonfs",
                    element:<Python/>
                },
                {
                    path:"mern",
                    element:<Mern/>
                }
            ]
        },
        {
            path:"/contactus",
            element:<><Navbar/><Contact/></>
        },
        {
            path:"/student",
            element:<><Navbar/><Student/></>,
        },
        {
            path:"/student/:id",
            element:<><Navbar/><Student/></>,
        },
        {
            path:"*",
            element:<NotFound/>
        }
    ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default MainFile
