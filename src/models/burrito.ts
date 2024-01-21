export interface BurritoSize {
  size: string;
  price: number;
}

export interface Burrito {
  id: number;
  name: string;
  sizes: BurritoSize[];
}

export interface Option {
  name: string;
  price: number;
}

// Example burrito data - should use database in a production environment
const burritos: Burrito[] = [
  {
    id: 1,
    name: 'Chicken Burrito',
    sizes: [
      { size: 'Small', price: 2 },
      { size: 'Regular', price: 3 },
      { size: 'XL', price: 5 },
    ],
  },
  {
    id: 2,
    name: 'Steak Burrito',
    sizes: [
      { size: 'Small', price: 2.5 },
      { size: 'Regular', price: 4 },
      { size: 'XL', price: 6 },
    ],
  },
  {
    id: 3,
    name: 'Bean Burrito',
    sizes: [
      { size: 'Small', price: 1.5 },
      { size: 'Regular', price: 2 },
      { size: 'XL', price: 4 },
    ],
  },
  {
    id: 4,
    name: 'Grill Cheese Burrito',
    sizes: [
      { size: 'Small', price: 2 },
      { size: 'Regular', price: 3.5 },
      { size: 'XL', price: 5.5 },
    ],
  },
];

// Add-ons
const options: Option[] = [
  { name: 'Black Olives', price: 0 },
  { name: 'Rice', price: 0 },
  { name: 'Sour Cream', price: 0 },
  { name: 'Lettuce', price: 0 },
  { name: 'Onions', price: 0 },
  { name: 'Tomatoes', price: 0 },
  { name: 'Guacamole', price: 2 },
  { name: 'Cheese', price: 1.5 },
  { name: 'Extra Meat', price: 3 },
];

export { burritos, options }