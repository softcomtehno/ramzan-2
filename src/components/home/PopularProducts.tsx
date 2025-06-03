import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import products from '../../data/products';
import ProductCard from '../ui/ProductCard';

const PopularProducts: React.FC = () => {
  const popularProducts = products.filter(product => product.popular);

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Хиты продаж
          </h2>
          <Link 
            to="/catalog" 
            className="flex items-center text-primary-600 hover:text-primary-700"
          >
            <span className="mr-1">Весь каталог</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;