import React, { useEffect, useState } from 'react'

export default function useCurrencyExchange(currency) {

    let [currencyRates,setCurrencyRates] = useState({});// wont crash the app if no data is fetched
    const url = `https://open.er-api.com/v6/latest/${currency}`; // base url changing according to base currency change
    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const res = await fetch(url);
                const data = await res.json();
                const rateData = await data.rates;
                setCurrencyRates(rateData);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
        
    },[currency]);
    return currencyRates;
}
