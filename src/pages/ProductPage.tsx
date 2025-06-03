import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';
import ProductCard from '../components/ui/ProductCard';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const { showNotification } = useNotification();
  const [product, setProduct] = useState(
    products.find(p => p.id === productId)
  );
  
  const [relatedProducts, setRelatedProducts] = useState(
    products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4)
  );

  useEffect(() => {
    if (product) {
      document.title = `${product.name} - EthnoStore KG`;
    } else {
      document.title = 'Товар не найден - EthnoStore KG';
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      showNotification('success', `${product.name} добавлен в корзину`);
    }
  };

  // Format price with spaces for thousands
  const formatPrice = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-2xl font-semibold mb-4">Товар не найден</h1>
        <p className="text-gray-600 mb-8">Извините, запрашиваемый товар не существует.</p>
        <Link to="/catalog" className="btn btn-primary">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <Link
        to="/catalog"
        className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Назад в каталог
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-primary-700 mb-6">
            {formatPrice(product.price)} сом
          </p>

          <div className="border-t border-b border-gray-200 py-6 mb-6">
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          <button
            onClick={handleAddToCart}
            className="btn btn-primary py-3 px-8 w-full md:w-auto flex items-center justify-center"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Добавить в корзину
          </button>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Похожие товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;