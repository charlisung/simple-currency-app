export default function CurrencyOne({
  currencyOne,
  setCurrencyOne,
  currencies,
  amountOne,
  setAmountOne,
}) {
  return (
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
  );
}
