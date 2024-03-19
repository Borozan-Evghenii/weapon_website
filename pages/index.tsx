import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const Home = () => (
  <main
    className={`flex h-2 min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
  >
    Hello
  </main>
);
