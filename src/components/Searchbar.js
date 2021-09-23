import React, { useState } from 'react'
import Spinner from './Spinner'

export default function Searchbar({ parsedData , setParsedData }) {

    const [searchKey, setSearchKey] = useState('')
    const [loading, setloading] = useState(false)

    const handleOnChange = (event)=>{
        setSearchKey(event.target.value)
        console.log(searchKey)
    }

    const takingMoviesFromApi =  async () =>{
        // old omdb api // let url = `http://www.omdbapi.com/?s=${searchKey}&apikey=a95c91f0`;
        let url = `https://api.themoviedb.org/3/search/movie?api_key=3c4c81a986ee24ee5a70b5a839bd8b4f&query=${searchKey.split(' ').join('+')}`;
        setloading(true);
        let data = await fetch(url);
        let parsedDataFromApi = await data.json()
        // setParsedData(parsedDataFromApi.Search);
        // console.log('data extracted from api ') 
        setParsedData(parsedDataFromApi.results);
        setloading(false);       
    }

    return (
        <div>
            <input type="text" value={searchKey} onChange={handleOnChange} className="searchbarCSS" placeholder="Search For a Movie/Series"/>
            <div className="d-flex align-items-center">
                <button type="button" onClick={takingMoviesFromApi} className="btn btn-danger mt-2">Search</button>
                <div className="searchLoading">
                    {loading ? <Spinner/> : ''}
                </div>
            </div>  
        </div>
    )
}
