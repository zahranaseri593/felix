import React,{createContext,useContext,useState} from 'react'

const ResultContext = createContext()

export const ResultContextProvider = ({children})=>{
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    //what are we searching?
    const getResults = async (type) =>{
        setIsLoading(true)

        const response = await fetch(`https://google-search74.p.rapidapi.com${type}`,{
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b5d6f94dddmshcf34be29f0bb394p16ec85jsn510f9adcb039',
                'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            }
        })

        const data = await response.json()
        setResults(data)
        setIsLoading(false)
    }

    return(
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )

}

export const useResultContext = ()=> useContext(ResultContext)