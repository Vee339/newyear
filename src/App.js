import React from 'react'
import './style.css'
import Content from './Components/Content'
import Background from './images/background.jpg'

function App(){

    const styles = {
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
        
    }

    return(
        <main style={styles}>
            <Content />
        </main>
    )
}

export default App