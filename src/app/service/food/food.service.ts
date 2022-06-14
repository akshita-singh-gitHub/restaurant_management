import { Injectable } from '@angular/core';
import { FoodDetail } from 'src/app/shared/models/foodDetail';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getImages():FoodDetail[]{
    return [
  
  {
    id: 1,
      name: 'Corn Curry',
       price: 500,
      favourite: false,
      star: 3,
      tags:['fast food','spicy ', 'lunch'],
      imageUrl:'/assets/corn-curry.jpg',
      CookTime: '20-30',
    
  
  },
  {
    id: 2,
      name: 'Corn Curry',
       price: 500,
      favourite: false,
      star: 3,
      tags:['fast food','spicy ', 'lunch'],
      imageUrl:  '/assets/biryani.jpg',
      CookTime: '20-30',
    
  
  },
  {
    id: 3,
      name: 'Corn Curry',
       price: 500,
      favourite: false,
      star: 3,
      tags:['fast food','spicy ', 'lunch'],
      imageUrl:   '/assets/dosa.jpg',
      CookTime: '20-30',
    
  
  },
  {
    id: 4,
      name: 'Corn Curry',
       price: 500,
      favourite: false,
      star: 3,
      tags:['fast food','spicy ', 'lunch'],
      imageUrl:  '/assets/idli.jpg',
      CookTime: '20-30',
    
  
  },
  {
    id: 5,
      name: 'Corn Curry',
       price: 500,
      favourite: false,
      star: 3,
      tags:['fast food','spicy ', 'lunch'],
      imageUrl: '/assets/brownies.jpg',
      CookTime: '20-30',
    
  
  },
  {
    id: 6,
      name: 'Corn Curry',
       price: 500,
      favourite: false,
      star: 3,
      tags:['fast food','spicy ', 'lunch'],
      imageUrl:'/assets/paneer-naan.jpg',
      CookTime: '20-30',
    
  
  },
  {
    id: 7,
      name: 'Corn Curry',
       price: 500,
      favourite: false,
      star: 3,
      tags:['fast food','spicy ', 'lunch'],
      imageUrl:  '/assets/momos.jpg',
      CookTime: '20-30',
    
  
  },
  {
    id: 8,
      name: 'Corn Curry',
       price: 500,
      favourite: false,
      star: 3,
      tags:['fast food','sweet ', 'lunch'],
      imageUrl:     '/assets/cake.jpg',
      CookTime: '20-30',
    
  
  }
    
    ]
  }
  
}
