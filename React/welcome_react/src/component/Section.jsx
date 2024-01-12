import React from 'react'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Gallery from './Gallery'
import Course from './Course'
import Shop from './Shop'
import Page_not_found from './Page_not_found'

function Section() {
    return (
       
        <>
          
          
            <Routes>

                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/course" element={<Course/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="*" element={<Page_not_found/>}/>
            </Routes>
          
          
        </>
        
    )
}

export default Section