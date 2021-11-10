import { useState, useEffect } from "react";
import "./App.css";
import CurrencyOne from "./CurrencyOne.js";
import CurrencyTwo from "./CurrencyTwo";
import ImageOne from "./ImageOne";
import ImageTwo from "./ImageTwo";

function App() {
  const currencies = [
    { label: "Select", value: "Select" },
    { label: "USD", value: "USD" },
    { label: "KRW", value: "KRW" },
    { label: "EUR", value: "EUR" },
    { label: "JPY", value: "JPY" },
    { label: "CHF", value: "CHF" },
    { label: "CAD", value: "CAD" },
    { label: "AUD", value: "AUD" },
    { label: "ZAR", value: "ZAR" },
    { label: "SEK", value: "SEK" },
    { label: "BRL", value: "BRL" },
  ];

  const [currencyOne, setCurrencyOne] = useState("");
  const [currencyTwo, setCurrencyTwo] = useState("");
  const [rate, setRate] = useState("");
  const [amountOne, setAmountOne] = useState("1");
  const [amountTwo, setAmountTwo] = useState("0");
  const [flagOne, setFlagOne] = useState("");
  const [flagTwo, setFlagTwo] = useState("");

  useEffect(() => {
    calculateRates();
    setFlagOne(currencyOne);
  }, [currencyOne]);

  useEffect(() => {
    calculateRates();
    setFlagTwo(currencyTwo);
  }, [currencyTwo]);

  useEffect(() => {
    calculateRates();
  }, [amountOne]);

  const fetchCurrencyRates = async () => {
    const res = await fetch("https://open.exchangerate-api.com/v6/latest");
    const data = await res.json();
    const rates = data.rates;
    return rates;
  };

  const calculateRates = async () => {
    const rates = await fetchCurrencyRates();

    const currency_One = rates[currencyOne];
    const currency_Two = rates[currencyTwo];

    const rate = currency_Two / currency_One;
    setRate(rate);

    const result = (amountOne * rate).toFixed(2);
    setAmountTwo(result);
  };

  return (
    <div className="App">
      <ImageOne flag={flagOne} />
      <div className="container">
        <CurrencyOne
          currencyOne={currencyOne}
          setCurrencyOne={setCurrencyOne}
          currencies={currencies}
          amountOne={amountOne}
          setAmountOne={setAmountOne}
        />
        {currencyOne && currencyTwo && (
          <div className="rate">
            1 {currencyOne} = {rate} {currencyTwo}
          </div>
        )}
        <CurrencyTwo
          currencyTwo={currencyTwo}
          setCurrencyTwo={setCurrencyTwo}
          currencies={currencies}
          amountTwo={amountTwo}
          setAmountTwo={setAmountTwo}
        />
      </div>
      <ImageTwo flag={flagTwo} />
    </div>
  );
}

export default App;
