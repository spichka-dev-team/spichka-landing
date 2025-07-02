'use client';

import { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import Image from 'next/image';

function getFormattedTime() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  const offset = -d.getTimezoneOffset() / 60;
  const sign = offset >= 0 ? '+' : '-';
  const abs = Math.abs(offset);
  const zone = `UTC${sign}${abs} (GMT${sign}${abs})`;
  return `${hh}:${mm} ${zone}`;
}

export default function Home() {
  const [time, setTime] = useState(getFormattedTime());
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => setTime(getFormattedTime());

    const now = new Date();
    const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    const timeoutId = window.setTimeout(() => {
      tick();
      intervalRef.current = window.setInterval(tick, 60000);
    }, msToNextMinute);

    return () => {
      clearTimeout(timeoutId);
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
          <Image src="/images/spichka-logo.svg" width={64} height={64} alt="Spichka logo" />
        </Link>
        <p className="text-white font-jost text-xl">{time}</p>
      </nav>
    </header>
  );
}
