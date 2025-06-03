import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import categories from '../../data/categories';
import CategoryCard from '../ui/CategoryCard';

const PopularCategories: React.FC = () => {
  return (
    <section className="py-16 kyrgyz-pattern">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Популярные категории
          </h2>
          <Link 
            to="/catalog" 
            className="flex items-center text-primary-600 hover:text-primary-700"
          >
            <span className="mr-1">Все категории</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              description={category.description}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;