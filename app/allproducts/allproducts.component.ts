import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  cart:any =[];
  products: any;
  constructor() { 
    this.products = [{
      name: 'DOLO', cost:6, rating:4, imagePath: 'assets/dolo.jpg',date:'12 JUNE 2021'}
      ,
     { name: 'saptran', cost:15, rating:3, imagePath: 'assets/septran.jpg',date:'15 JULY 2021 '
    },{name: 'calpol', cost:20, rating:4, imagePath: 'assets/calpol.jpg',date:'29 AUGUST 2021'
   }]
    
  }

  ngOnInit(): void {
  }
  addToCart(products:any){
    this.cart.push(products);
    console.log(this.cart);
  }
  share(name:string){
    console.log(name+"shared");
  }

}