import { options } from '../models/burrito'

export interface OrderItem {
  burritoId: number;
  quantity: number;
  size: string;
  chosenOptions?: string[];
}

export interface Order {
  id: number;
  items: OrderItem[];
  totalCost?: number;
}