export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  category: string;
  image: string;
  popular: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Category = 
  | 'clothing' 
  | 'accessories' 
  | 'interior' 
  | 'gifts' 
  | 'all';

export interface OrderFormData {
  name: string;
  phone: string;
  address: string;
  city: string;
  comment: string;
  deliveryMethod: 'courier' | 'pickup';
  paymentMethod: 'cash';
}