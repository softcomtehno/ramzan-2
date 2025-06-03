import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../context/NotificationContext';
import { OrderFormData } from '../../types';

const OrderForm: React.FC = () => {
  const { clearCart } = useCart();
  const { showNotification } = useNotification();
  
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    phone: '',
    address: '',
    city: '',
    comment: '',
    deliveryMethod: 'courier',
    paymentMethod: 'cash',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Logging order details to console
    console.log('Order submitted:', formData);
    
    // Clear cart and show success notification
    clearCart();
    showNotification('success', 'Заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.');
  };

  const validatePhone = (phone: string) => {
    const regex = /^\+996\s\d{3}\s\d{3}\s\d{3}$/;
    return regex.test(phone);
  };

  const formatPhone = (input: string) => {
    // Strip all non-digit characters
    const digits = input.replace(/\D/g, '');
    
    // Format according to Kyrgyz phone number pattern
    if (digits.length <= 3) {
      return '+' + digits;
    } else if (digits.length <= 6) {
      return '+' + digits.slice(0, 3) + ' ' + digits.slice(3);
    } else if (digits.length <= 9) {
      return '+' + digits.slice(0, 3) + ' ' + digits.slice(3, 6) + ' ' + digits.slice(6);
    } else {
      return '+' + digits.slice(0, 3) + ' ' + digits.slice(3, 6) + ' ' + digits.slice(6, 9) + ' ' + digits.slice(9, 12);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhone(e.target.value);
    setFormData({ ...formData, phone: formattedPhone });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <h2 className="text-xl font-semibold mb-6">Данные для доставки</h2>
      
      <div className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Имя*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Телефон* (формат: +996 XXX XXX XXX)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            required
            placeholder="+996"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            Город*
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Адрес*
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        {/* Comment */}
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
            Комментарий к заказу
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={3}
            value={formData.comment}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        {/* Delivery Method */}
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Способ доставки*
          </span>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="deliveryMethod"
                value="courier"
                checked={formData.deliveryMethod === 'courier'}
                onChange={handleChange}
                className="mr-2"
              />
              <span>Курьер</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="deliveryMethod"
                value="pickup"
                checked={formData.deliveryMethod === 'pickup'}
                onChange={handleChange}
                className="mr-2"
              />
              <span>Самовывоз</span>
            </label>
          </div>
        </div>
        
        {/* Payment Method */}
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Способ оплаты*
          </span>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={formData.paymentMethod === 'cash'}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Наличными при получении</span>
          </label>
        </div>
      </div>
      
      <button
        type="submit"
        className="btn btn-primary w-full mt-8 py-3"
        disabled={!formData.name || !formData.phone || !formData.city || !formData.address}
      >
        Оформить заказ
      </button>
    </form>
  );
};

export default OrderForm;