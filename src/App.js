import React from 'react'
import './style.css'
import Video from './videos/background.mp4'
import Content from './Components/Content'

function App(){
    return(
        <main>
            <video autoPlay muted loop id="my-video">
                <source src={Video} type="video/mp4" />
            </video>
            <Content />
            
        </main>
    )
}

export default App