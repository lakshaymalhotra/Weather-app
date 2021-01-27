import React, { Component, useState } from 'react';


function Select({ currentCountry }) {
    const [country, setCountry] = useState("London");

    return (
        <>
            <div className="button-container" style={{textAlign:"center"}}>
                <div className="btn-group">
                    <button className="btn btn-secondary btn-lg" type="button">
                        {country}
                    </button>
                    <button type="button" className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu center-hoja-bhai" /*style={{textAlign:"center"}}*/>
                        
                        <a className="dropdown-item" onClick={() => { setCountry("Delhi"); currentCountry("Delhi"); }} href="#">DELHI</a>
                        <a className="dropdown-item" onClick={() => { setCountry("England"); currentCountry("England"); }} href="#">ENGlAND</a>
                        <a className="dropdown-item" onClick={() => { setCountry("London"); currentCountry("London"); }} href="#">LONDON</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Select;