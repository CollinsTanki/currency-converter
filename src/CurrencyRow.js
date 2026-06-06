import React from 'react';

export default function CurrencyRow({ currencyOptions = [], selectedCurrency = '', onChangeCurrency = () => {}, onChangeAmount = () => {}, amount = 1 }) {
  const options = Array.isArray(currencyOptions) ? currencyOptions : [];

  return (
    <div>
      <input type="number" className='input' value={amount} onChange={onChangeAmount}/>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
