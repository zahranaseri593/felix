import React from "react";
import {Route, Routes, Navigate} from 'react-router-dom'

import Results from './Results'

export default function Main(){
    return(
        <main className="p-5">
            <Routes>
                <Route path="/" element={<Navigate to="/search"/>} />
                <Route path="/search" element={<Results />}/>
                <Route path="/home" element={<Results />}/>
            </Routes>
        </main>
    )
}