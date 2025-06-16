import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Mochila Flamingos',
      price: 799,
      description: 'Diseño tropical con flamencos y palmeras.',
      image: '/img/kip2.jpg'
    },
    {
      id: 2,
      name: 'Mochila Galaxy',
      price: 850,
      description: 'Estilo galáctico con colores brillantes.',
      image: '/img/kip3.jpg'
    },
    {
      id: 3,
      name: 'Mochila Cactus',
      price: 730,
      description: 'Fresca y original con estampado de cactus.',
      image: '/img/kip4.jpg'
    },
    {
      id: 4,
      name: 'Mochila Arcoíris',
      price: 900,
      description: 'Llena de colores vibrantes y felicidad.',
      image: '/img/kip5.jpg'
    },
    {
      id: 5,
      name: 'Mochila Graffiti',
      price: 820,
      description: 'Diseño urbano inspirado en el arte callejero.',
      image: '/img/kip6.jpg'
    },
    {
      id: 6,
      name: 'Mochila Flamingos',
      price: 799,
      description: 'Diseño tropical con flamencos y palmeras.',
      image: '/img/kip7.jpg'
    },
    {
      id: 7,
      name: 'Mochila Galaxy',
      price: 850,
      description: 'Estilo galáctico con colores brillantes.',
      image: '/img/kip8.jpg'
    },
    {
      id: 8,
      name: 'Mochila Cactus',
      price: 730,
      description: 'Fresca y original con estampado de cactus.',
      image: '/img/kip9.jpg'
    }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
