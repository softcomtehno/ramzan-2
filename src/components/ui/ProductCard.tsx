import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../context/NotificationContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { showNotification } = useNotification();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    showNotification('success', `${product.name} добавлен в корзину`);
  };

  // Format price with spaces for thousands
  const formatPrice = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <Link 
      to={`/catalog/${product.id}`}
      className="card group hover:shadow-lg"
    >
      <div className="relative overflow-hidden h-56 sm:h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        {product.popular && (
          <span className="absolute top-2 left-2 bg-secondary-600 text-white text-xs font-bold px-2 py-1 rounded-md">
            Популярное
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-primary-700 font-bold">
            {formatPrice(product.price)} сом
          </span>
          <button
            onClick={handleAddToCart}
            className="btn btn-primary p-2 rounded-full"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;