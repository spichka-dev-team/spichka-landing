// src/app/page.tsx
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
  return `${hh}:${mm} UTC${sign}${abs} (GMT${sign}${abs})`;
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
    <>
      <header className="fixed inset-x-0 top-0 z-20">
        <nav className="max-w-10xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/">
            <Image src="/images/spichka-logo.svg" width={96} height={96} alt="Spichka logo" />
          </Link>
          <p className="text-white font-jost text-3xl pr-2">{time}</p>
        </nav>
      </header>

      <main className="relative pt-36 overflow-visible">
        <div
          className="absolute inset-x-0 top-0 h-[600px] pointer-events-none z-0"
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse 15% 8% at center,
                rgba(255,255,255,1) 0%,
                rgba(255,255,255,0) 50%
              ),
              radial-gradient(
                ellipse 40% 25% at center,
                rgba(255,255,255,0.6) 0%,
                rgba(255,255,255,0) 70%
              ),
              radial-gradient(
                ellipse 80% 60% at center,
                rgba(255,102,0,0.8) 0%,
                rgba(255,102,0,0.4) 40%,
                rgba(255,102,0,0) 100%
              )
            `,
          }}
        />

        <div className="relative z-10 flex justify-center">
          <div className="text-center">
            <h1 className="text-white font-oks text-[10rem] sm:text-[12rem] md:text-[14rem] uppercase tracking-wide">
              ЗАЖИГАЕМ ВАШИ ИДЕИ
            </h1>
            <div className="mt-2 h-[2px] w-[95%] bg-white opacity-80 mx-auto" />
          </div>
        </div>
      </main>
    </>
  );
}
