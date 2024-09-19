import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Box, Flex, Image, Heading, Text, Spinner, useBreakpointValue } from "@chakra-ui/react";

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
        setCoinData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };
    fetchData();
  }, [url]);

  const descriptionProps = useBreakpointValue({
    base: { fontSize: 'sm' },
    md: { fontSize: 'md' },
  });

  if (loading) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner size="lg" />
      </Flex>
    );
  }

  if (!coinData) return null;

  return (
    <Box mt={6} mx="auto" maxW="container.md" p={4}>
      <Flex gap={4} align="center" mb={6}>
        <Image src={coinData.image.small} alt={coinData.name} boxSize="100px" />
        <Heading size="lg" my={2} textTransform="capitalize">
          {coinData.name}
        </Heading>
      </Flex>
      <Text
        mt={6}
        color="gray.600"
        dangerouslySetInnerHTML={{ __html: coinData.description.en }}
        {...descriptionProps}
      />
    </Box>
  );
}

export default CoinPage;
