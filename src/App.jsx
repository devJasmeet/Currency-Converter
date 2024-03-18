import { useState , useEffect } from 'react'
import './App.css'
import useCurrencyExchange from './hooks/useCurrencyExchange'
import PromptBox from './components/PromptBox';
import { RiSwapFill } from "react-icons/ri";

function App() {
  
  const [result, setResult] = useState(0); // converted amount to be displayed
  const [query, setQuery] = useState(0) ; // user input amount
  const [fromCur,setFromCur] = useState("USD"); // base currency
  const [toCur,setToCur] = useState("CAD"); // user input amount to be converted to this currency
  
  let currencyRates = useCurrencyExchange(fromCur);
  let currencies = Object.keys(currencyRates); // fetching currency codes
  
  useEffect(() => {
    setResult(query * currencyRates[toCur]);
  },[currencyRates,query,toCur])
  
  function handleAmountChange(value) {
    setQuery(Number(value));
  }

  function swap() {
    let temp1 = fromCur;
    setFromCur(toCur);
    setToCur(temp1);
  }

  return (
    <>
      <div className='h-screen flex justify-center items-center text-center'>
        <div className='flex flex-col gap-4 '>
          
          <PromptBox 
            labelName={"from"} 
            amount={query} 
            handleAmountChange={handleAmountChange} 
            currencies={currencies} 
            fromCur={fromCur }
            setFromCur={setFromCur}
          />

          <div onClick={swap} className='max-w-fit text-4xl m-auto text-blue-500'><RiSwapFill /></div>

          <PromptBox 
            labelName={"to"} 
            amount={result} 
            currencies={currencies} 
            toCur={toCur }
            setToCur={setToCur}
            disabled
          />
        </div>
      </div>
    </>
  )
}

export default App
