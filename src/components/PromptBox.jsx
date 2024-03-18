import React from 'react'

function PromptBox({
    labelName, 
    amount, 
    handleAmountChange, 
    setToCur,
    setFromCur,
    fromCur,
    toCur,
    disabled,
    currencies=[]
    }) {

    const inputBg = (labelName == 'to' ? 'bg-black text-gray-400' : 'bg-gray-300 text-black');
    
    return (
        <>
            <div className='grid grid-cols-5 gap-1 text-gray-400 mx-2'>
                <div className=' py-2  text-gray-500 font-light'>{labelName}</div>
                
                <input 
                    type="number" 
                    name="amount" 
                    placeholder='0'
                    value={amount>0 ? amount : ''}
                    onChange={(e) => handleAmountChange(e.target.value)}
                    disabled = {disabled || false}
                    className={`col-span-3 py-1 px-4 rounded text-lg ${inputBg} `}
                />

                <select 
                    className='py-2 text-start bg-transparent text-gray-300 font-thin'
                    onChange={(e) => { labelName == "from" ? setFromCur(e.target.value) : setToCur(e.target.value) }}
                    value={labelName == 'from' ? fromCur : toCur} 
                >
                    <option  >{labelName == 'from' ? fromCur : toCur }</option>
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default PromptBox
