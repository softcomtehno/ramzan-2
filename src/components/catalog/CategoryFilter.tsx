import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import categories from '../../data/categories';
import { Category } from '../../types';

interface CategoryFilterProps {
  selectedCategory: Category;
  onChange: (category: Category) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onChange }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Категории</h3>
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            selectedCategory === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onChange('all')}
        >
          Все товары
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              selectedCategory === category.id
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => onChange(category.id as Category)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;