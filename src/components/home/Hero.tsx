import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/5907612/pexels-photo-5907612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Традиции в каждом товаре',
    description: 'Аутентичные кыргызские изделия ручной работы',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/6480200/pexels-photo-6480200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Качество и аутентичность',
    description: 'Изделия от лучших ремесленников Кыргызстана',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/11874357/pexels-photo-11874357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Частичка Кыргызстана у вас дома',
    description: 'Уникальные предметы интерьера и подарки',
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            zIndex: index === currentSlide ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/catalog" className="btn btn-primary px-6 py-3">
                  Каталог
                </Link>
                <Link to="/about" className="btn btn-outline border-white text-black px-6 py-3">
                  О нас
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-5 left-0 right-0 z-10 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-110' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;