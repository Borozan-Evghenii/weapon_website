import type { NextPage } from 'next';
import { Inter } from 'next/font/google';

import { Button } from '@/components/common/Button/Button';
import { Typography } from '@/components/common/Typography/Typography';

const inter = Inter({ subsets: ['latin'] });
const Home: NextPage = () => (
  <main
    className={`flex h-2 min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
  >
    <Button>купить за 190 000</Button>
    <Typography size='text2' tag='h3'>
      Some
    </Typography>
  </main>
);

export default Home;
