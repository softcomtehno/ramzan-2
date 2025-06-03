import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import products from '../data/products';
import CategoryFilter from '../components/catalog/CategoryFilter';
import SearchBar from '../components/catalog/SearchBar';
import ProductCard from '../components/ui/ProductCard';
import { Category } from '../types';

const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as Category) || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    document.title = 'Каталог - EthnoStore KG';
  }, []);

  useEffect(() => {
    // Update search params when filters change
    const params: { category?: string; search?: string } = {};
    if (selectedCategory !== 'all') {
      params.category = selectedCategory;
    }
    if (searchTerm) {
      params.search = searchTerm;
    }
    setSearchParams(params);

    // Filter products based on category and search term
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term) ||
          product.shortDescription.toLowerCase().includes(term)
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, setSearchParams]);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Каталог товаров</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onChange={handleCategoryChange}
          />
        </div>

        <div className="lg:col-span-3">
          <SearchBar onSearch={handleSearch} initialValue={searchTerm} />

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500">
                Товары не найдены. Попробуйте изменить параметры поиска.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;