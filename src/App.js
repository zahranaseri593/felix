import React,{useState} from 'react'

import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'


export default function App(){
    const [darkTheme, setDarkTheme] = useState(0)

    return(
        <div className={darkTheme? 'dark' : ''}>
            <div className='app-div'>
            <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
            <Main />
            <Footer />
            </div>
        </div>
    )
}