import type { NextPage } from 'next';
import { Inter } from 'next/font/google';

import { Button } from '@/components/common/Button/Button';
import { ProductCard } from '@/components/common/Cards/ProductCard/ProductCard';
import { Typography } from '@/components/common/Typography/Typography';

const inter = Inter({ subsets: ['latin'] });
const Home: NextPage = () => (
  <main
    className={`flex h-2 min-h-screen flex-col items-center justify-between p-2 ${inter.className}`}
  >
    <Button>купить за 190 000</Button>
    <Typography size='text2' tag='h3'>
      Some
    </Typography>
    <ProductCard
      caliber='10X28MM'
      image='https://assets-global.website-files.com/627b9e837c85ef6a67a31795/646d9d0ca23123cb3f1900bb_BOLD%2014_.webp'
      name='ПИСТОЛЕТ ТРАВМАТИЧЕСКИЙ RISEN'
      pipeLength={'5,5" - 136MM'}
      price='190 000 ₽'
      pricePrefix='от'
    />
  </main>
);

export default Home;
