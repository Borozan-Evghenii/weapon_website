import type { NextPage } from 'next';
import { Inter } from 'next/font/google';

import { Button } from '@/components/common/Button/Button';

const inter = Inter({ subsets: ['latin'] });
const Home: NextPage = () => (
  <main
    className={`flex h-2 min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
  >
    <Button>купить за 190 000</Button>
  </main>
);

export default Home;
