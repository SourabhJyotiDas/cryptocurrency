import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ErrorComponent from './ErrorComponent';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import Chart from './Chart';

export default function CoinDetails() {

  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const params = useParams();
  const serverUrl = `https://api.coingecko.com/api/v3`;
  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const btnsArray = ["24h", "7d", "14d", "30d", "60d", "200d", "365d", "max"]

  const fetchCoin = async () => {
    try {
      let { data } = await axios.get(`${serverUrl}/coins/${params.id}`);
      let { data: chartData } = await axios.get(`${serverUrl}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
      // console.log(data);
      setCoin(data)
      setChartArray(chartData.prices)
      // console.log(chartData);
      setLoading(false)

    } catch (error) {
      setError(true)
      setLoading(false);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line
    fetchCoin()
    // eslint-disable-next-line
  }, [params.id, currency, days])



  const handleOnChnage = (e) => {
    // console.log(e.target.value);
    setCurrency(e.target.value)
  }

  const switchChartStats =(btns)=>{
    switch (btns) {

      case"24h":
        setDays("24h");
        setLoading(true);
        break;

      case"7d":
        setDays("7d");
        setLoading(true);
        break;

      case"14d":
        setDays("14d");
        setLoading(true);
        break;

      case"30d":
        setDays("30d");
        setLoading(true);
        break;

      case"60d":
        setDays("60d");
        setLoading(true);
        break;

      case"200d":
        setDays("200d");
        setLoading(true);
        break;

      case"365d":
        setDays("365d");
        setLoading(true);
        break;

      case"max":
        setDays("max");
        setLoading(true);
        break;

      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  }


  if (error) return <ErrorComponent message={"Server Error while fetching Coin Details"} />

  return (
    <>

      {
        loading ? <Loader /> :
          <>

            <div className='w-full border-2 border-blue-500'>
              <Chart currency={currencySymbol} chartArray={chartArray} days={days} />
            </div>

            {/* buttons */}
            <div className='flex m-3 overflow-x-auto text-xs'>
              {btnsArray.map((element, index) => {
                return <button onClick={()=>switchChartStats(element)} className='p-2 m-1 bg-blue-500 text-white rounded-md' key={index}>{element}</button>
              })}
            </div>
            {/* buttons */}

            <p className='text-center text-red-400'>
              last Updated On {Date(coin.market_data.last_updated).split("G")[0]}
            </p>

            <div className="radioGroup flex items-center justify-center sticky my-5 "  >
              <div className='px-3'>
                <input id="draft" className=" cursor-pointer" type="radio" name="status" value={"inr"} onChange={handleOnChnage} />
                <label htmlFor="draft" className="peer-checked/draft:text-sky-500"> INR</label>
              </div>
              <div className='px-3'>
                <input id="draft" className=" cursor-pointer" type="radio" name="status" value={"usd"} onChange={handleOnChnage} />
                <label htmlFor="draft" className="peer-checked/draft:text-sky-500"> USD</label>
              </div>
              <div className='px-3'>
                <input id="draft" className=" cursor-pointer" type="radio" name="status" value={"eur"} onChange={handleOnChnage} />
                <label htmlFor="draft" className="peer-checked/draft:text-sky-500"> EUR</label>
              </div>
            </div>


            

            <div className='flex flex-col justify-center items-center space-y-5' >
              <img className='w-[200px] object-contain' src={coin.image.large} alt="" />
              <p>{coin.name}</p>
              <p>{currencySymbol}{coin.market_data.current_price[currency]}</p>
              <p className='flex'>

                {
                  coin.market_data.price_change_24h > 0 ? <GoTriangleUp className='text-green-500' /> :
                    <GoTriangleDown className="text-red-500" />
                }
                {coin.market_data.price_change_percentage_24h}
              </p>

              <div className="badge text-lg bg-black text-white p-2 rounded-md">
                {`#${coin.market_cap_rank}`}
              </div>


              <div className="customBar ">
                <input className='bg-blue-500 w-full' type="range" name="" id="" value={50} />
                <div className='justify-between text-xs flex items-center'>
                  <p className='bg-red-300 p-2 rounded-lg'>{`${currencySymbol}${coin.market_data.low_24h[currency]}`}</p>
                  <p className='mx-3'>24h Range</p>
                  <p className='bg-green-300 p-2 rounded-lg'>{`${currencySymbol}${coin.market_data.high_24h[currency]}`}</p>

                </div>
              </div>

            </div>

            <div className="box text-xs font-bold mt-5 space-y-6 mb-20">

              <div className='flex justify-around'>
                <p>Max Supply</p>
                <p>{coin.market_data.max_supply}</p>
              </div>

              <div className='flex justify-around'>
                <p>Circulating Supply</p>
                <p>{coin.market_data.circulating_supply}</p>
              </div>

              <div className='flex justify-around'>
                <p>Market Cap</p>
                <p>{`${currencySymbol}${coin.market_data.market_cap[currency]}`}</p>
              </div>

              <div className='flex justify-around'>
                <p>All Time Low</p>
                <p>{`${currencySymbol}${coin.market_data.atl[currency]}`}</p>
              </div>

              <div className='flex justify-around'>
                <p>All Time High</p>
                <p>{`${currencySymbol}${coin.market_data.ath[currency]}`}</p>
              </div>

            </div>




          </>
      }

    </>
  )
}
