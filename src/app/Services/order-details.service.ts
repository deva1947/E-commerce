import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  //frunituredetails
  frunitureDetials=[
  {
    id:1,
    frunitureName:"Dinning table",
    frunitureDetials:"Wooden",
    price:8000,
    FrunitureImg:"https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id:2,
    frunitureName:"chair",
    frunitureDetials:"Wooden",
    price:6000,
    FrunitureImg:"https://images.pexels.com/photos/923192/pexels-photo-923192.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id:3,
    frunitureName:"sofa",
    frunitureDetials:"Wooden",
    price:6000,
    FrunitureImg:"https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }


  ]
}
