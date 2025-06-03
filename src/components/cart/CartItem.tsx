import React from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(product.id, newQuantity);
    }
  };

  // Format price with spaces for thousands
  const formatPrice = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div className="flex flex-col sm:flex-row py-4 border-b border-gray-200">
      <div className="sm:w-24 sm:h-24 h-32 w-full mb-4 sm:mb-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center rounded-md"
        />
      </div>
      <div className="flex-1 sm:ml-4">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.shortDescription}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="px-2 py-1 text-gray-500 hover:text-primary-600"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="px-2 py-1 text-gray-500 hover:text-primary-600"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-gray-900 mr-4">
              {formatPrice(product.price * quantity)} сом
            </span>
            <button
              onClick={() => removeFromCart(product.id)}
              className="text-gray-400 hover:text-secondary-600"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;