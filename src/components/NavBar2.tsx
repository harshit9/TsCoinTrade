import { Box, Input, Flex, Text } from "@chakra-ui/react";

const NavBar2 = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      borderBottom="1px solid"
      borderColor="whiteAlpha.900"
      bg="#05010D"
      color="whiteAlpha.800"
      py={2}
      px={4}
      boxShadow="md blue.400"
    >
      <Flex gap={5} fontSize="sm">
        <Text>
          Market Cap: <Text as="span" color="blue.400">$2.66T</Text> 0.90%
        </Text>
        <Text>
          24h Vol: <Text as="span" color="blue.400">$64.6B</Text> 22.06%
        </Text>
        <Text>
          Dominance: <Text as="span" color="blue.400">BTC:51.9% ETH: 16.3%</Text>
        </Text>
        <Text>
          ETH Gas: <Text as="span" color="blue.400">19Gwei</Text>
        </Text>
      </Flex>
      <Box>
        <Input
          placeholder="Search..."
          borderColor="gray.300"
          borderRadius="md"
          px={3}
          py={1}
        />
      </Box>
    </Flex>
  );
};

export default NavBar2;
