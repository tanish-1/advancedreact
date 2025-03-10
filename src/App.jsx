import React, {useState} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import ParamComp from "./components/ParamComp.jsx";
import Courses from "./components/Courses.jsx";
import MockTest from "./components/MockTest.jsx";
import NotFound from "./components/NotFound.jsx";

const App = () => {
 const router =   createBrowserRouter([
        {
            path: "/",
            element:<div>
                <Navbar/>
                <Home/>
            </div>
        },
        {
          path: "/about",
            element:<div>
                <Navbar/>
                <About/>
            </div>

        },
        {
          path: "/dashboard",
            element:<div>
                <Navbar/>
                <Dashboard/>
            </div>,
            children:[
                {
                    path:"course",
                    element:<Courses/>
                },
                {
                path:"mock-test",
                    element:<MockTest/>
                }
            ]

        },
     {
         path:"/student/:id",
         element:<div>
             <Navbar/>
             <ParamComp/>
         </div>
     },
     {
         path:"*",
         element:<NotFound/>
     }
    ])
    return (
        <>
     <RouterProvider router = {router}/>

        </>
    );
};

export default App;