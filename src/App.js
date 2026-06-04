import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const API_KEY = process.env.REACT_APP_EXCHANGE_API_KEY;
const BASE_URL = `https://api.exchangeratesapi.io/latest?access_key=${API_KEY}`;

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  console.log(currencyOptions);


  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        if (!data || !data.rates) {
          console.error('Exchange API response missing rates:', data);
          return;
        }

        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      })
      .catch(error => {
        console.error('Failed to fetch exchange rates:', error);
      });

  }, []);
  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <div className='equals'>=</div>
      <CurrencyRow />
    </>
  );
}

export default App;
