import { Box, Flex } from "@chakra-ui/react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoinPage from './pages/CoinPage';
import NavBar1 from './components/NavBar1';
import NavBar2 from './components/NavBar2';

function App() {
  return (
      <Flex bg="#05010D" color="whiteAlpha.900" minH="100vh" w="full" direction="column">
        <NavBar1 />
        <NavBar2 />
        <Box flex="1" p={4}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crypto/:id/:symbol" element={<CoinPage />} />
          </Routes>
        </Box>
      </Flex>
  );
}

export default App;
