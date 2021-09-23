import background from '../b.jpg'
import React from 'react'
import Searchbar from './Searchbar'

export default function Homepage({ parsedData , setParsedData }) {
    return (
        <div className="homepageCustomCSS bg-dark">
            
            <div className="contentCSS">
                <h1 className="heading">Hello, <br/> <strong>Movies</strong></h1>
                <p className="para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum repellat fugit libero eveniet quam? Asperiores a expedita eum ex ducimus!
                </p>
                <Searchbar parsedData={parsedData} setParsedData={setParsedData}/>
            </div>

            <div className="imageCSS">
                <div className="gradient"></div>
                <img src={background} alt="background" />
            </div>

        </div>
    )
}

    
