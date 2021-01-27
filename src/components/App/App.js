import React, { useState, useEffect } from 'react';
import Card from '../card/card'
import '../card/card.css';
import Select from '../select/select';


function App() {
  const [error, setError] = useState(null);
  const [inputTemp, setInputTemp] = useState([]);

  const [country, setCurrentCountry] = useState("London");

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${country}&mode=json&appid=c9e128bafece16f2a16d5f186adfe415`)
      .then(response => response.json())
      .then((data) => {
        setInputTemp(data.list.filter((item, i) => (i % 8) === 0));
        console.log(country)
      },
        (error) => {
          setError(error);
        })
  }, [country])

  return (
    <>

      {/* <div className="card1">
        <h1 className="card-title">5-Day Forecast.</h1>
      </div> */}
      <div className="card">
        <div className="card-body title">
          <h1 className="card-title">5-Day Forecast.</h1>

        </div>
      </div>

      <div className="cardContainer">
        {inputTemp.map((item, i) => {
          return (
            <Card key={i} item={item} />
          );
        })}
      </div>
      <Select currentCountry={setCurrentCountry} />
    </>
  )

};

export default App;