export default function CurrencyTwo({
  currencyTwo,
  setCurrencyTwo,
  currencies,
  amountTwo,
  setAmountTwo,
}) {
  return (
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
  );
}
