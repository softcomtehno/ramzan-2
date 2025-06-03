import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, description, image }) => {
  return (
    <Link
      to={`/catalog?category=${id}`}
      className="group card overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <div>
            <h3 className="text-white text-xl font-semibold">{name}</h3>
            <p className="text-gray-200 text-sm mt-1">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;