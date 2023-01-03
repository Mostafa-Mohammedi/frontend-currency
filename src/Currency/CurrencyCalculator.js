import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CurrencyCalculator() {
  const fetchCurrencyDatafrom = (e) => {
    setCurrencyData({ ...currencyData, from: e.target.value });
    console.log("check to value: ", currencyData.from);
  };

  const fetchCurrencyDataTo = (e) => {
    setCurrencyData({ ...currencyData, to: e.target.value });
    console.log("check to value: ", currencyData.to);
  };

  const fetchCurrencyDataAmount = (e) => {
    setCurrencyData({ ...currencyData, amount: e.target.value });
    console.log("check to value: ", currencyData.amount);
  };

  const [currencyData, setCurrencyData] = useState({
    to: "usd",
    from: "eur",
    amount: 100,
  });
  
  let baseURL = `https://api.apilayer.com/fixer/convert?to=${
    currencyData.to
  }&from=${currencyData.from}&amount=${parseFloat(currencyData.amount)}`;

  // default API key
  axios.defaults.headers.common["apikey"] = "BOnOxGHA0d7MADN6zMVF7BHFTvOognDY";

  const [base, SetBase] = useState("");


  //method for fecthing data from Fixer.io
  const fetchDataFixer = async () => {
    try {
      await axios
        .get(baseURL)
        .then((result) => {
          const query = result.data;
          const info = result.data;
          SetBase(result.data)

          console.log("query: ", query);
          console.log("info: ", info);

        })
        .catch((err) => {
          if (err.response) {
            //console.log(err.response.data);
            console.log("********************");
            //console.log(err.response.status);
          } else if (err.request) {
            //console.log(err.request);
          } else console.console("Error message", err.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //to fetch the data from the method and rendes once when the page loads
  useEffect(() => {
    fetchDataFixer();
  }, []);

    useEffect(() => {
    fetchDataFixer();
  }, [currencyData.from, currencyData.to, currencyData.amount]);

  const testdata = {
    rate: 1.063887,
    timestamp: 1672092063,
  };

  console.log("check base: ", base.result)

  return (
    <div className="container">
      <h2>Currency Calculator</h2>
      <form className="d-flex flex-column justify-content-center">
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="country"
            placeholder="Enter country"
            value={currencyData.from}
            onChange={fetchCurrencyDatafrom}
          />
          <label>Enter the Currency code to convert from</label>
        </div>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="country"
            placeholder="Enter country"
            value={currencyData.to}
            onChange={fetchCurrencyDataTo}
          />
          <label>Enter the Currency code to convert to</label>
        </div>
        <div className="form-floating mb-3 mt-3">
          <input
            type="number"
            className="form-control"
            id="country"
            placeholder="Enter country"
            value={currencyData.amount}
            onChange={fetchCurrencyDataAmount}
          />
          <label>Enter the amount</label>
        </div>
        <div className="form-floating mb-3 mt-3">
          <input
            type="number"
            className="form-control"
            id="country"
            placeholder="Enter amount"
            value={testdata.rate}
            disabled
          />
          <label>Conversion rate</label>
        </div>
      </form>
    </div>
  );
}
