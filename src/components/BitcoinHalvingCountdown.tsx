import { useEffect, useState } from "react";

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
      const difference: number = halvingDate.getTime() - now.getTime(); // Difference in milliseconds

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
    <div>
      <div className="px-7 py-3 flex flex-col items-center">
        <p className="text-xl font-semibold">
          <span className="text-yellow-400">Bitcoin</span> Halving Countdown
        </p>

        <p className="text-white text-4xl font-bold">
          {countdown.days}
          <span className="text-2xl font-medium">D </span>
          {countdown.hours}
          <span className="text-2xl font-medium">H </span>
          {countdown.minutes}
          <span className="text-2xl font-medium">M </span>
          {countdown.seconds}
          <span className="text-2xl font-medium">S </span>
        </p>
      </div>
    </div>
  );
}

export default BitcoinHalvingCountdown;
