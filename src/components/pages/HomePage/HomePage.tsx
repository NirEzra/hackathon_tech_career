import React from 'react'
import Home from '../../Home'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'
function HomePage() {
    return (
        <>
            <Home {...homeObjOne}/>
            <Home {...homeObjTwo}/>
            <Home {...homeObjThree}/>
            <Home {...homeObjFour}/>
            
        </>
    )
}

export default HomePage
