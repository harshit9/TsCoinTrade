import { useState, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
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
        time_until_update: "929",
      },
    ],
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
  }, []);

  return (
    <Box w="100%">
      <Flex
        justify="center"
        align="center"
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        gap={3} // Add spacing between the elements
        pt={2} pb={1}
      >
        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            <Text as="span" color="blue.500">Fear</Text> & <Text as="span" color="red.600">Greed</Text> Index
          </Text>
          <Text fontSize="4xl" fontWeight="bold" >
            {fng.data[0].value}
          </Text>
          <Text fontSize="base" color="whiteAlpha.900">
            ({fng.data[0].value_classification})
          </Text>
        </Box>
        
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <GaugeChart
            id="gauge-chart"
            nrOfLevels={100}
            arcWidth={0.15}
            arcsLength={[0.25, 0.25, 0.25, 0.25]}
            colors={['#D22B2B', '#ff8c1a', '#0096FF', '#0047AB']}
            percent={fng.data[0].value * 0.01}
            arcPadding={0}
            formatTextValue={(string) => string}
            hideText={true}
            needleColor="#00FFFF"
            needleBaseColor="#0FFFFF"
            marginInPercent={0.07}
            style={{ width: '250px', height: '130px' }} // Adjust size to fit better
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default FearGreedIndex;
