import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import OrderForm from '../components/cart/OrderForm';

const OrderPage: React.FC = () => {
  const { cartItems } = useCart();
  
  useEffect(() => {
    document.title = 'Оформление заказа - EthnoStore KG';
  }, []);

  if (cartItems.length === 0) {
    return (
      <div className="container-custom py-16 text-center">
        <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
        <h1 className="text-2xl font-semibold mb-4">Ваша корзина пуста</h1>
        <p className="text-gray-600 mb-8">
          Добавьте товары из каталога, чтобы продолжить оформление заказа.
        </p>
        <Link to="/catalog" className="btn btn-primary">
          Перейти в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Оформление заказа</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">Корзина</h2>

            <div className="space-y-4">
              {cartItems.map(item => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <OrderForm />
          </div>
        </div>

        <div className="lg:col-span-1">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;