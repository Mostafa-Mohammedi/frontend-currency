import React, { useEffect, useState } from "react";
import axios from "axios";
const data = {
  AED: "United Arab Emirates Dirham",
  AFN: "Afghan Afghani",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
};

//business logic for getting the symbols from the Fixer.io API

export default function CurrencyTable() {
  // base URl for getting the symbols
  const baseURL = "https://api.apilayer.com/fixer/symbols";

  // default API key
  //axios.defaults.headers.common["apikey"] = "EDzIPqzdpGiGc0EwEtnvAIYmwSPuM2fD";

  //useState to get the data from symbols from the API
  const [base, SetBase] = useState("");
  //console.log(base)

  //method for fecthing data from Fixer.io
  const getALLSymbols = async () => {
    try {
      await axios
        .get(baseURL)
        .then((result) => {
          const available_currencies = result.data.symbols;
          SetBase(available_currencies);
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
    getALLSymbols();
  }, []);

  const [searchQuery, setSearcQuery] = useState("");

  const text = searchQuery.toLowerCase();

  const emptyList = () => {
    const test = Object.entries(base).filter(currency => currency[1].toLowerCase().includes(text)).map((number, index) => {
      const currencyList = number[1].split(" ");
      const lengde = currencyList.length - 1;

      if(currencyList.length > 1){
        return (
          <tr key={index}>
            <td key={index+1}className="text-start p-3">
              {number[1].split(" ").splice(0, lengde).join(" ")}
            </td >
            <td key={index+2} className="text-start p-3">
              {number[1].split(" ").splice(-1)}
            </td>
            <td key={index+3} className="text-start p-3">
              {number[0]}
            </td>
          </tr>
        ); 
      }
    });

    return (
      <div className="container mt-5">
        <div className="d-flex flex-row align-items-center">
          <h2 className="text-start w-75 ">List of countries and their currency</h2>
          <form className="container text-end">
            <input
              className="form-fontrol rounded p-2"
              type="search"
              placeholder="search country"
              aria-label="Search"
              onChange={(e) => setSearcQuery(e.target.value)}
            />
          </form>
        </div>
        <table className=" container table table-striped table-bordered table-hover mt-3 pt-3">
          <thead className="">
            <tr className="">
              <th className="text-start "> Country</th>
              <th className="text-start "> Currency</th>
              <th className="text-start">Base</th>
            </tr>
          </thead>
          <tbody>
            {test}
          </tbody>
        </table>
      </div>
    );
  };

  return <div className="container">{emptyList()}</div>;
}
