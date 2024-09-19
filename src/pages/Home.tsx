import { Box,  Flex } from "@chakra-ui/react";
import BitcoinHalvingCountdown from '../components/BitcoinHalvingCountdown';
import FearGreedIndex from '../components/FearGreedIndex';
import CryptoTable from '../components/CryptoTable';

const Home = () => {
  return (
    <Box >
      <Flex direction="column" align="center" justify="center" w="full" p={0} >
        <Flex
          direction="row"
          w="80%"
          maxW="80%"
          gap={5}
          justify="space-between"
          mb={8}
          sx={{
            ".css-14nfm56, .css-h94677": {
              padding: 0, // Remove padding
              margin: 0,  // Remove margin
            },
          }}
        >
          {/* Bitcoin Halving Countdown */}
          <Box
            bg="#1F2D37"
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="md"
            boxShadow="inset 0 0 10px rgba(0, 0, 0, 0.5)"
            p={4}
            flex="1"
            display="flex"
            alignItems="stretch"
          >
            <BitcoinHalvingCountdown />
          </Box>

          {/* Fear & Greed Index */}
          <Box
            bg="#1F2D37"
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="md"
            boxShadow="inset 0 0 10px rgba(0, 0, 0, 0.5)"
            p={4}
            flex="1"
            display="flex"
            alignItems="stretch"
          >
            <FearGreedIndex />
          </Box>
        </Flex>

        {/* Crypto Table */}
        <Flex
          w="80%"
          align="center"
          justify="center"
          borderRadius="md"
          boxShadow="inset 0 0 10px rgba(0, 0, 0, 0.5)"
          p={0} // Remove any extra padding
          textAlign="center" // Center the table within the container
        >
          <CryptoTable />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
