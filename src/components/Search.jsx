import React from "react";
import { useResultContext } from "../context/ResultContextProvider";

export default function Search(){
    const {setSearchTerm, getResults, searchTerm} = useResultContext()
    
    return(
    <div className="search_input-container shadow-sm bg-white rounded-pill row ms-2 me-4">
        <input type="text" value={searchTerm} placeholder="search Felix" onChange={(e)=>{setSearchTerm(e.target.value)}} className="rounded-pill bg-transparent ps-4 col-11 border-0 p-2 text-secondary"/>
        {searchTerm && <span className="col-1 text-center p-2" onClick={()=>getResults(`/?query=${searchTerm}`)}>🔎</span>}
    </div>
    )
}
// npm install -g serve
//   serve -s build