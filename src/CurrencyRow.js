import React from 'react';

export default function CurrencyRow({ currencyOptions = [], selectedCurrency = '', onChangeCurrency = () => {} }) {
  const options = Array.isArray(currencyOptions) ? currencyOptions : [];

  return (
    <div>
      <input type="number" className='input' />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
