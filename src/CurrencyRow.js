import React from 'react';

export default function CurrencyRow() {
  return (
    <div>
      <input type="number" className='input'/>
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
    </div>
  );
}
