import { useState, useEffect } from 'react';

function App() {
  const currencies = [
    { label: 'Select', value: 'Select' },
    { label: 'USD', value: 'USD' },
    { label: 'KRW', value: 'KRW' },
  ];

  const [currencyOne, setCurrencyOne] = useState('');
  const [currencyTwo, setCurrencyTwo] = useState('');
  const [rate, setRate] = useState('');
  const [amountOne, setAmountOne] = useState('1');
  const [amountTwo, setAmountTwo] = useState('0');

  useEffect(() => {
    calculateRates();
  }, [currencyOne]);

  useEffect(() => {
    calculateRates();
  }, [currencyTwo]);

  useEffect(() => {
    calculateRates();
  }, [amountOne]);

  const fetchCurrencyRates = async () => {
    const res = await fetch('https://open.exchangerate-api.com/v6/latest');
    const data = await res.json();
    const rates = data.rates;
    return rates;
  };

  const calculateRates = async () => {
    const rates = await fetchCurrencyRates();

    const currency_One = rates[currencyOne];
    const currency_Two = rates[currencyTwo];

    const rate = (currency_Two / currency_One).toFixed(6);
    setRate(rate);

    const result = (amountOne * rate).toFixed(2);
    setAmountTwo(result);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="form-control">
          <select
            onChange={(e) => setCurrencyOne(e.target.value)}
            value={currencyOne}
          >
            {currencies.map((currency, i) => (
              <option key={i} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
          <input
            type="number"
            onChange={(e) => setAmountOne(e.target.value)}
            value={amountOne}
          />
        </div>
        <div className="rate">
          1 {currencyOne} = {rate === 'NaN' ? '0' : rate} {currencyTwo}
        </div>
        <div className="form-control">
          <select
            onChange={(e) => setCurrencyTwo(e.target.value)}
            value={currencyTwo}
          >
            {currencies.map((currency) => (
              <option value={currency.value}>{currency.label}</option>
            ))}
          </select>
          <input
            type="number"
            onChange={(e) => setAmountTwo(e.target.value)}
            value={amountTwo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
