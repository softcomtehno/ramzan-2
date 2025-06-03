import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'О нас - EthnoStore KG';
  }, []);

  return (
    <div>
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/11874357/pexels-photo-11874357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Кыргызские национальные изделия"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">О нас</h1>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Наша история</h2>
          <div className="prose prose-lg mx-auto">
            <p className="mb-6 text-lg leading-relaxed">
              <strong>EthnoStore KG</strong> — проект, созданный для популяризации национальной культуры и поддержки местных мастеров. Мы продаём товары, сделанные вручную, с душой и традицией.
            </p>
            
            <p className="mb-6 text-lg leading-relaxed">
              Наша цель — сохранить и продвигать богатое культурное наследие Кыргызстана, делая традиционные ремесла доступными для широкой аудитории. Мы тщательно отбираем каждое изделие, работая напрямую с лучшими мастерами со всей страны.
            </p>
            
            <p className="mb-6 text-lg leading-relaxed">
              В нашем каталоге представлены аутентичные кыргызские изделия: от национальной одежды и аксессуаров до предметов интерьера и подарочных наборов. Каждый товар имеет свою историю и несёт в себе частичку кыргызской культуры.
            </p>
            
            <p className="mb-10 text-lg leading-relaxed">
              Мы гордимся тем, что помогаем местным ремесленникам развивать свое дело и знакомим людей с богатыми традициями Кыргызстана. Покупая товары в EthnoStore KG, вы не только приобретаете уникальное изделие ручной работы, но и поддерживаете сохранение культурного наследия.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link to="/catalog" className="btn btn-primary px-8 py-3">
              Перейти в каталог
            </Link>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Наши преимущества</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Аутентичность</h3>
              <p className="text-gray-600">
                Все наши товары изготовлены вручную местными мастерами с использованием традиционных техник и материалов.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Быстрая доставка</h3>
              <p className="text-gray-600">
                Мы организуем доставку по всему Кыргызстану и за его пределы в кратчайшие сроки.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Поддержка ремесленников</h3>
              <p className="text-gray-600">
                Покупая наши товары, вы напрямую поддерживаете местных мастеров и помогаете сохранять культурные традиции.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;