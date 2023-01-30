import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';

export default function Coin() {

  let serverUrl = `https://api.coingecko.com/api/v3`;

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState("inr");

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"


  const fetchCoins = async () => {
    try {
      let { data } = await axios.get(`${serverUrl}/coins/markets?vs_currency=${currency}&page=${page}`);
      // console.log(data);
      setCoins(data)
      setLoading(false)

    } catch (error) {
      setError(true)
      setLoading(false);
    }
  }

  const handlePrevious = () => {
    setPage(page - 1)
    setLoading(true)
    fetchCoins()
  }

  const handleNext = () => {
    setPage(page + 1)
    setLoading(true)
    fetchCoins()
  }

  const handleOnChnage = (e)=>{
    // console.log(e.target.value);
    setCurrency(e.target.value)
  }

  useEffect(() => {
    // eslint-disable-next-line
    fetchCoins()
    // eslint-disable-next-line
  }, [currency, page])

  if (error) return <ErrorComponent message={"Server Error while fetching Coin"}/>

  return (
    <div>
      <div>
        {loading ? <Loader /> : <>


          <div className="radioGroup flex items-center justify-center sticky ml-5 text-xl"  >
            <div className='px-3'>
              <input id="draft" className=" cursor-pointer" type="radio" name="status" value={"inr"} onChange={handleOnChnage} />
              <label htmlFor="draft" className="peer-checked/draft:text-sky-500"> INR</label>
            </div>
            <div className='px-3'>
              <input id="draft" className=" cursor-pointer" type="radio" name="status" value={"usd"} onChange={handleOnChnage}/>
              <label htmlFor="draft" className="peer-checked/draft:text-sky-500"> USD</label>
            </div>
            <div className='px-3'>
              <input id="draft" className=" cursor-pointer" type="radio" name="status" value={"eur"} onChange={handleOnChnage} />
              <label htmlFor="draft" className="peer-checked/draft:text-sky-500"> EUR</label>
            </div>
          </div>


          <div className='flex items-center justify-center flex-wrap'>
            {coins.map((element) => {
              return <CoinCard key={element.id}
                id={element.id}
                image={element.image}
                price={element.current_price}
                symbol={element.symbol}
                currencySymbol={currencySymbol}
              />

            })}
          </div>
          <div className='flex justify-between'>

            <button disabled={page <= 1} className='py-2 px-5 bg-blue-500 text-white' onClick={handlePrevious}>Previous</button>
            <button className='py-2 px-5 bg-blue-500 text-white' onClick={handleNext}>Next</button>

          </div>
        </>}

      </div>
    </div>
  )
}
