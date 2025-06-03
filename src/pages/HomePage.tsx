import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import PopularCategories from '../components/home/PopularCategories';
import PopularProducts from '../components/home/PopularProducts';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'EthnoStore KG - Традиции в каждом товаре';
  }, []);

  return (
    <div>
      <Hero />
      <PopularCategories />
      <PopularProducts />
    </div>
  );
};

export default HomePage;