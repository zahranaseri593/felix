import React from "react";
import logo from '../styles/logo.png'
import Search  from "./Search";

export default function Navbar(props){

    function toggleTheme(){
        props.setDarkTheme(prevState => !prevState)
    }

    return(
        <nav className="w-100 p-4 border-bottom d-flex align-items-center">
            <img src={logo} width="80" alt=""/>
            <Search />
            {props.darkTheme?  <button className="btn btn-light ms-auto d-none d-md-block" onClick={toggleTheme} type="button">Light 💡</button> : <button className="btn btn-dark ms-auto d-none d-md-block" onClick={toggleTheme} type="button">Dark 🌙</button>}
        </nav>
    )
}