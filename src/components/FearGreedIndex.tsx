import { useState, useEffect } from 'react';
import GaugeChart from 'react-gauge-chart';
import axios from 'axios';


interface FNGResponse {
  name: string;
  data: {
    value: number;
    value_classification: string;
    timestamp: string;
    time_until_update: string;
  }[];
}

const FearGreedIndex: React.FC = () => {
  const url: string = 'https://api.alternative.me/fng/';
  const [fng, setfng] = useState<FNGResponse>({
    name: "Fear and Greed Index",
    data: [
      {     
        value: 100,
        value_classification: "Greed",
        timestamp: "1711843200",
        time_until_update: "929"
      }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<FNGResponse>(url);
        setfng(response.data);
        
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };
    fetchData();
  }, [] );

  return (
    <div>
      <div className="pl-7 pt-3 pb-1 flex justify-around">
        <p className="text-lg font-semibold">
          <span className="text-blue-500">Fear</span> & <span className="text-red-600">Greed</span> Index:<br/>
          <span className='text-4xl font-bold'>{fng.data[0].value} </span>
          <span className='text-base font-light text-white/[0.90]'>({fng.data[0].value_classification}) </span>
        </p>
        <GaugeChart
          className="max-h-[100px] max-w-[200px]"
          id="gauge-chart"
          nrOfLevels={100}
          arcWidth={0.15}
          arcsLength={[0.25, 0.25, 0.25, 0.25]}
          colors={['#D22B2B', '#ff8c1a', '#0096FF', '#0047AB']}
          percent={(fng.data[0].value) * 0.01}
          arcPadding={0}
          formatTextValue={(string) => string}
          hideText={true}
          needleColor="#00FFFF"
          needleBaseColor="#0FFFFF"
          marginInPercent={0.07}
        />
      </div>
    </div>
  );
};

export default FearGreedIndex;
