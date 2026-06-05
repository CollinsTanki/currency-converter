import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const API_KEY = process.env.REACT_APP_EXCHANGE_API_KEY;
const BASE_URL = `https://api.exchangeratesapi.io/latest?access_key=${API_KEY}`;

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
 const [fromCurrency, setFromCurrency] = useState();
 const [toCurrency, setToCurrency] = useState();
 const [exchangeRate, setExchangeRate] = useState();
 const [amount, setAmount] = useState(1);
 const [amountInFromCurency, setAmountInFromCurrency] =useState(true);
 console.log(exchangeRate);

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        if (!data || !data.rates) {
          console.error('Exchange API response missing rates or data:', data);
          return;
        }

        if (data.success === false) {
          console.error('API Error:', data.error?.info || 'Unknown error');
          return;
        }

        const firstCurrency = Object.keys(data.rates)[0];
        const uniqueCurrencies = [...new Set([data.base, ...Object.keys(data.rates)])];
        setCurrencyOptions(uniqueCurrencies);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      })
      .catch(error => {
        console.error('Failed to fetch exchange rates:', error);
      });

  }, []);
  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow currencyOptions={currencyOptions}
       selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
       />
      <div className='equals'>=</div>
      <CurrencyRow currencyOptions={currencyOptions}
       selectedCurrency={toCurrency}
       onChangeCurrency={e => setToCurrency(e.target.value)}
       />
    </>
  );
}

export default App;
