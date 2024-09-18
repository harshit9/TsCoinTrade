import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

interface CoinData {
  image: { small: string };
  name: string;
  description: { en: string };
}

const CoinPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true`;

  const [loading, setLoading] = useState<boolean>(true);
  const [coinData, setCoinData] = useState<CoinData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response);
        setCoinData(response.data);
        setLoading(false);
        console.log(coinData);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };
    fetchData();
  }, [url, coinData]); 

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!coinData) return null;

  return (
    <div className='mt-6 mx-auto flex-col w-[80%] items-center'>
      <div className='flex gap-2 items-center'>
        <img src={coinData.image.small} alt={coinData.name} />
        <h1 className='text-2xl my-2 capitalize font-bold'>{coinData.name}</h1>
      </div>
      <p className='mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html: coinData.description.en }}></p>
    </div>
  );
}

export default CoinPage;
