export interface Product {
  id: number;
  name: string;
  category: Category;
  inStock: number;
  price: number;
  size?: Size[];
  color?: string;
  image?: string;
}

export type Category = 'Bebidas Calientes' | 'Bebidas frías' | 'Hojaldres' | 'Wafles' | 'Sanduches' | 'Licores';
export type Size = 'Pequeño' | 'Mediano' | 'Grande' | 'ExtraGrande'