import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  @Input() data: Product[];
  poductService: ProductService;
  constructor(test:ProductService) {
   this.poductService=test;
  }

  ngOnInit() {
    if (!this.data) {
    
      this.data = this.poductService.getAll();
    }
  }

}
