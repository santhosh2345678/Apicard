import React from "react"
import {Routes,Route, BrowserRouter}from 'react-router-dom'
import Home from './Home.js'
import Detail from "./Detail.js"



 export const Routss=()=>{
    return(
        <div>
       <BrowserRouter>
            <Routes>
               
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/Detail" element={<Detail/>}></Route>  
            </Routes>
        </BrowserRouter>
        </div>



    )
 }