import { Link } from "react-router-dom";
import { Flex, Box, Select, Button } from "@chakra-ui/react";

const NavBar1 = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      borderBottom="1px solid"
      borderColor="whiteAlpha.900"
      py={2}
      px={4}
      bg="#05010D"
      color="whiteAlpha.900"
    >
      <Flex align="center" gap={8} fontWeight="bold">
        <Box fontSize="2xl" color="blue.400">
          <Link to="/">CoinTrade</Link>
        </Box>
        <Link to="/Trending">Trending</Link>
        <Link to="/Heatmap">Heatmap</Link>
        <Link to="/Watchlist">Watchlist</Link>
      </Flex>

      <Flex align="center" gap={4}>
        <Box>
          <Select
            variant="unstyled"
            bg="inherit"
            color="whiteAlpha.900"
            borderColor="whiteAlpha.300"
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EURO">EURO</option>
          </Select>
        </Box>
        <Button colorScheme="blue">icon</Button>
      </Flex>
    </Flex>
  );
};

export default NavBar1;
