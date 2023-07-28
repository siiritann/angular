export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  releaseDate: Date;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    releaseDate: new Date(1991,1,1)
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    releaseDate: new Date(1988,2,14)
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    releaseDate: new Date(2003,11,19)
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/