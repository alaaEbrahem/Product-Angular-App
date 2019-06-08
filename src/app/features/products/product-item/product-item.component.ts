import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { Product } from 'src/app/_model/product';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
 // encapsulation:ViewEncapsulation.None,
  
})
export class ProductItemComponent implements OnInit {
  @Input()product:Product;
  constructor() {
   // this.product = { id: 1, name: 'photo Camera', image: ['assets/img/products/product-grey-1.jpg'], price: 32, discount: 10 };
  }
 // select element from html
@ViewChild("productName")
productName:ElementRef;
//add attr to parent
@HostBinding('style.backgroundColor')
color:any;
//add event to parent
@HostListener('click')
Myfun2(){
  alert('clicked');
  
}

  ngOnInit() {
   
  }
  getPrice(): number {
    let result;
    if (this.product.discount != null) {
      result = this.product.price - this.product.discount;
    }
    else {
      result = this.product.price;
    }
    
    return result;
  }
  MyFunc(){
    alert(this.productName.nativeElement.innerText);
  }
  alaaFunc(Name:HTMLHeadingElement){
    alert(Name.innerText);
  }
login(){
  alert("login");
}
}
