import { useState } from 'react'
import { NavBar, Home, Features, Impact, About, } from '/Projects/HabitFlow/HabitFlow/src/assets/components.js'

function Homepage() {

    return (
        <>
            <NavBar></NavBar>
            <Home></Home>
            <Features></Features>
            <Impact></Impact>
            <About></About>
        </>
    )
}

export default Homepage
