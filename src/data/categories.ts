import { Category } from '../types';

interface CategoryData {
  id: Category;
  name: string;
  description: string;
  image: string;
}

const categories: CategoryData[] = [
  {
    id: 'clothing',
    name: 'Национальная одежда',
    description: 'Традиционные кыргызские наряды и головные уборы',
    image: 'https://images.pexels.com/photos/5816360/pexels-photo-5816360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'accessories',
    name: 'Аксессуары',
    description: 'Музыкальные инструменты, обереги и декоративные элементы',
    image: 'https://images.pexels.com/photos/3414172/pexels-photo-3414172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'interior',
    name: 'Интерьер',
    description: 'Ювелирные изделия и предметы декора для вашего дома',
    image: 'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'gifts',
    name: 'Подарочные наборы',
    description: 'Готовые наборы национальных изделий для подарка',
    image: 'https://images.pexels.com/photos/8140925/pexels-photo-8140925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export default categories;