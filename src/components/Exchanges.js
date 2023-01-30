import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';

export default function Exchanges() {

    const [exchange, setExchange] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    let serverUrl = `https://api.coingecko.com/api/v3`;

    const fetchCoins = async () => {
        try {
            let { data } = await axios.get(`${serverUrl}/exchanges`);
            // console.log(data);
            setExchange(data)
            setLoading(false)

        } catch (error) {
            setError(true)
            setLoading(false);
        }
    }

    useEffect(() => {
        // eslint-disable-next-line
        fetchCoins()
        // eslint-disable-next-line
    }, [])

  if (error) return <ErrorComponent message={"Server Error while fetching Exchanges"}/>


    return (
        <div>
            <div>
                {loading ? <Loader /> : <>
                    <div className='flex items-center justify-center flex-wrap'>
                        {exchange.map((element) => {

                            return <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 mx-10' key={element.id}>
                                <a className='border border-gray-400 drop-shadow-2xl rounded-md  min-w-[200px] m-3 h-[25vh] flex items-center justify-center flex-col ' href={element.url} target="blank" rel="noopener noreferrer">
                                    <img className='w-[60px]' src={element.image} alt="" />
                                    <div className='primaryFont'>{element.trust_score_rank}</div>
                                    <div className='font-mono'>{element.name}</div>
                                </a>
                            </div>

                        })}
                    </div>

                </>}

            </div>
        </div>
    )
}
