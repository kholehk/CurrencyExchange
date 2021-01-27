import './App.css';
import data from './data.json';

import React, { useEffect } from 'react';
import Loader from './loader';
import Currency from './Currency/Currency';
import ExchangeList from './Exchange/ExchangeList';

function App() {
  const [currency, setCurrency] = React.useState({});
  const [exchange, setExchange] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  
  function getExchange(currency) {
    return new Promise((resolve, reject) => {
      if (typeof currency === "object" && currency !== null) {
        resolve(currency);
      } else {
        reject(new Error("Error input data"));
      }
    });
  }

  useEffect(() => {
    getExchange(data)
      .then(response => {
        setTimeout(() => setLoading(false), 2000);
        
        setCurrency(response);
        setExchange(
          Object.keys(response.rates).map(key => ({ curr: key, exch: response.rates[key] }))
        );
      });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Exchange currency</h1>
      </header>
      {loading && <Loader />}
      {loading
        ? null
        : <main>
            <Currency currency = { currency }/>
            <ExchangeList exchange = { exchange } />
        </main>}
    </div>
  );
}

export default App;
