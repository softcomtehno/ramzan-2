import React from 'react';
import { useCart } from '../../context/CartContext';

const CartSummary: React.FC = () => {
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  // Format price with spaces for thousands
  const formatPrice = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
      <h2 className="text-xl font-semibold mb-4">Ваш заказ</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Количество товаров:</span>
          <span className="font-medium">{totalItems}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Сумма:</span>
          <span className="font-medium">{formatPrice(subtotal)} сом</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Доставка:</span>
          <span className="font-medium">По тарифам курьера</span>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="flex justify-between text-lg">
          <span className="font-semibold">Итого:</span>
          <span className="font-bold text-primary-700">{formatPrice(subtotal)} сом</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;