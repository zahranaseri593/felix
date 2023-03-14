import React from "react";
import { useLocation } from "react-router";

import { useResultContext } from "../context/ResultContextProvider";
import Loading from './Loading'

export default function Results(){
    const {results, isLoading, searchTerm} = useResultContext()
    const location = useLocation()

    if(isLoading) return <Loading/>

    switch (location.pathname) {
        case '/search':
        return (
            <div className="d-flex flex-column">
                {results?.results?.map(({url,title,description,position})=>(
                <div className="mb-4 search-result" key={position}>
                    <a href={url} target="_blank" rel="noreferrer">
                    <p className="result-link mb-0">
                    {url.length>40? (url.substring(0,40) + '...') :url}
                    </p>
                    <h3 className="mb-3">
                    <strong>{title}</strong>
                    </h3>
                    <p className="result-description"><strong>description: </strong>{description.length>200? (description.substring(0,200) + '...'): description}</p>
                    </a>
                </div>
                ))}
            </div>
        )
        case '/home':
        return (<div>nothing to show here! just practicing "Navigate"</div>)

        default:
        return 'ERROR'  
    }
}