import { useEffect, useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

interface CountdownInterface {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function BitcoinHalvingCountdown() {
  const [countdown, setCountdown] = useState<CountdownInterface>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const now: Date = new Date();
      const halvingDate: Date = new Date("April 22, 2024 08:39:00 UTC");
      const difference: number = halvingDate.getTime() - now.getTime();

      const days = Math.abs(Math.floor(difference / (1000 * 60 * 60 * 24)));
      const hours = Math.abs(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const minutes = Math.abs(
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      );
      const seconds = Math.abs(Math.floor((difference % (1000 * 60)) / 1000));

      setCountdown({ days, hours, minutes, seconds });
    };

    calculateCountdown();
    const countdownInterval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={1}
      textAlign="center"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        py={1}
        px={7}
        w="100%"
        h="100%"
      >
        <Text fontSize="3xl" fontWeight="semibold">
          <Text as="span" color="yellow.400">Bitcoin</Text> Halving Countdown
        </Text>

        <Text color="white" fontSize="4xl" fontWeight="bold" mt={2}>
          {countdown.days}
          <Text as="span" fontSize="2xl" fontWeight="medium">D </Text>
          {countdown.hours}
          <Text as="span" fontSize="2xl" fontWeight="medium">H </Text>
          {countdown.minutes}
          <Text as="span" fontSize="2xl" fontWeight="medium">M </Text>
          {countdown.seconds}
          <Text as="span" fontSize="2xl" fontWeight="medium">S </Text>
        </Text>
      </Flex>
    </Box>
  );
}

export default BitcoinHalvingCountdown;
