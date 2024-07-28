// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.7.28/v1/currencies/usd.json
import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.7.28/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) // res means response i.e an object and convert that to JSON format
      .then((res) => setData(res[currency])); // to store the data/res. res.currency i.e object.property
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
