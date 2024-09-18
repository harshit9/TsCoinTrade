import axios from 'axios';
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { Link } from 'react-router-dom';


interface CryptoData {
    market_cap_rank: number;
    id: string;
    symbol: string;
    image: string;
    name: string;
    current_price: number;
    price_change_percentage_1h_in_currency: number;
    price_change_percentage_24h_in_currency: number;
    price_change_percentage_7d_in_currency: number;
    market_cap: number;
    total_volume: number;
    circulating_supply: number;
    total_supply: number;
  }

  function currencyFormat(num: number): string {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

const CryptoTable = () => {
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [loading, setLoading] = useState<boolean>(true);
   const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
   const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CryptoData[]>(url);
        console.log(response);
        setCryptoData(response.data);
        setLoading(false);
        console.log(cryptoData);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };
    fetchData();
  }, [currentPage, cryptoData, url]);

  const onPageChange = (page: number) => {
    if (page < 1 || page > 50) return;
    setCurrentPage(page);
  };

  const circulatingSupplyPercentage = (circulating_supply: number, total_supply: number): number => {
    return (circulating_supply / total_supply) * 100;
  };

  if(loading){
    return(
      <div className="w-9/12">
        <Skeleton className="h-11 w-full" />
        <Skeleton className="h-11 w-full mt-4" />
        <Skeleton className="h-11 w-full mt-4" />
        <Skeleton className="h-11 w-full mt-4" />
        <Skeleton className="h-11 w-full mt-4" />
        <Skeleton className="h-11 w-full mt-4" />
        <Skeleton className="h-11 w-full mt-4" />
        <Skeleton className="h-11 w-full mt-4" />
        <Skeleton className="h-11 w-full mt-4" />
        <Skeleton className="h-11 w-full mt-4" />
      </div>
    )
  }

  return (
    
    <div className='w-9/12'>
      <table className='w-full'>
        <thead className='bg-[#1F2D37]/[0.5] border-b-[0.5px] border-white/[0.85]'>
          <tr className='text-center text-sm'>
            <th className=" font-medium px-4 py-5">Ranking</th>
            <th className=" font-medium px-4 py-5">Symbol</th>
            <th className=" font-medium px-4 py-5 text-right">Price</th>
            <th className=" font-medium px-4 py-5 text-right">1h %</th>
            <th className=" font-medium px-4 py-5 text-right">24h %</th>
            <th className=" font-medium px-4 py-5 text-right">7d %</th>
            <th className=" font-medium px-4 py-5">Market Cap</th>
            <th className=" font-medium px-4 py-5">Volume(24h)</th>
            <th className=" font-medium px-4 py-5">Circulating Supply</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((coin) => (
            <tr key={coin.market_cap_rank} className='text-center border-b-[0.5px] text-[15px] hover:bg-gray-900'>
              <td className="px-4 py-4">{coin.market_cap_rank}</td>
              <td className="px-4 py-4 pt-[27px] flex justify-items-center items-center">
                <img src={coin.image} alt={coin.name} className='h-[30px] w-[30px] mr-2'/>
                <Link to={`/crypto/${coin.id}/${coin.symbol}`}>
                <div className='font-bold'>{coin.symbol.toUpperCase()}</div>
                </Link>
              </td>
              <td className="px-4 py-4 text-right font-medium">{currencyFormat(coin.current_price)}</td>
              <td className={`px-4 py-4 text-right ${coin.price_change_percentage_1h_in_currency < 0 ? 'text-red-400' : 'text-green-400'}`}>
                {coin.price_change_percentage_1h_in_currency != null ? parseFloat(coin.price_change_percentage_1h_in_currency.toFixed(2)) + '%' : 'N/A'}
                </td>
                <td className={`px-4 py-4 text-right ${coin.price_change_percentage_24h_in_currency < 0 ? 'text-red-400' : 'text-green-400'}`}>
                {coin.price_change_percentage_24h_in_currency != null ? parseFloat(coin.price_change_percentage_24h_in_currency.toFixed(2)) + '%' : 'N/A'}
                </td>
                <td className={`px-4 py-4 text-right ${coin.price_change_percentage_7d_in_currency < 0 ? 'text-red-400' : 'text-green-400'}`}>
                {coin.price_change_percentage_7d_in_currency != null ? parseFloat(coin.price_change_percentage_7d_in_currency.toFixed(2)) + '%' : 'N/A'}
                </td>

              <td className="px-4 py-4">{currencyFormat(coin.market_cap)}</td>
              <td className="px-4 py-4">{currencyFormat(coin.total_volume)}</td>
              <td className="px-4 py-4 text-sm text-left">
                {coin.circulating_supply.toFixed(1)} {coin.symbol.toUpperCase()}  <br/> 
                <div className=" w-9/12 max-w-full h-2 bg-gray-400 rounded-full relative">
                <div
                  className="h-full bg-gray-600 rounded-full absolute left-0 top-0"
                  style={{ width: `${circulatingSupplyPercentage(coin.circulating_supply, coin.total_supply)}%` }}>
                </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center mt-5 mb-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          {'<<'} First
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
        {'<'} Prev
        </button>
        <span className="px-4">
          Page {currentPage} of {50}
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === 50}
        >
          Next {'>'}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          onClick={() => onPageChange(50)}
          disabled={currentPage === 50}
        >
          Last {'>>'}
        </button>
      </div>
    </div>
  );
}

export default CryptoTable