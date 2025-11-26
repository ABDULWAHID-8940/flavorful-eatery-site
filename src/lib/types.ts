export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  calories?: number;
  image: string;
  category: string;
  tags: string[];
  ingredients?: string[];
  allergens?: string[];
  rating?: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Deal {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  discount: number;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export type UserRole = 'customer' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name?: string;
  avatar_url?: string;
}
