import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

const ContactsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Контакты - EthnoStore KG';
  }, []);

  return (
    <div>
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/11831590/pexels-photo-11831590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Контакты"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Контакты</h1>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Телефон</h3>
                  <a
                    href="tel:+996555987654"
                    className="text-gray-700 hover:text-primary-600"
                  >
                    +996 555 987 654
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a
                    href="mailto:support@ethnostore.kg"
                    className="text-gray-700 hover:text-primary-600"
                  >
                    support@ethnostore.kg
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Адрес</h3>
                  <p className="text-gray-700">
                    г. Бишкек, ул. Чуй, 111
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Мы в социальных сетях</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Instagram className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Instagram</h3>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 hover:text-primary-600"
                  >
                    @ethnostore.kg
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MessageCircle className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                  <a
                    href="https://wa.me/996555987654"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 hover:text-primary-600"
                  >
                    +996 555 987 654
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Карта</h2>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.8801704939015!2d74.63181311159015!3d42.87537330226997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7a6744bf7b7%3A0xd92ad343affd6266!2zMTExINC_0YDQvtGB0L8uINCn0YPQuSwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1748831326789!5m2!1sru!2skg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;