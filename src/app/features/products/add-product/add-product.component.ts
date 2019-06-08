import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from '../product.service';
import { NgForm, FormGroup, FormControlName, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { Product } from 'src/app/_model/product';
import { Category } from 'src/app/_model/Category';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentType } from 'src/app/_model/PaymentType';
import { PaymentTypeService } from 'src/app/_services/payment-Type.service';
import { Tag } from 'src/app/_model/Tag';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: Product = {};
  onSale: number;
  categories: Category[];
  paymentTypes: PaymentType[];
  myForm: FormGroup;
  lang: string[];
  currentLangTab: number;
  selectedImage: number;


  constructor(private productService: ProductService, private categoryService: CategoryService
    , private paymentTypesService: PaymentTypeService) {
      this.categories=categoryService.getAll();
   
    //this.onSale=1;
    //this.product = {};

  }
  ngOnInit() {
    this.selectedImage = 0;
    this.currentLangTab = 0;
   
    this.paymentTypes = this.paymentTypesService.getAll();
    console.log(this.paymentTypesService.getAll());
    this.lang = ['English', 'Arabic', 'frensh'];

    this.myForm = new FormGroup({
      'price': new FormControl(1000),
      'discount': new FormControl(),
      'paymentTypes': new FormArray([]),
      'FkCategoryId': new FormControl(),
      'data': new FormArray(this.langs),
      'name': new FormControl(),
      'description': new FormControl(),
      'images': new FormArray([new FormGroup({})]),
      'tags': new FormArray([]),

    });


  }

//   onSubmit(myForm: NgForm) {
//     console.log(this.onSale);
//     console.log(myForm);
//     // this.product.name=myForm.value.name;
//     // this.product.description=myForm.value.description;
//     // this.product.discount=myForm.value.discount;
//     // this.product.price=myForm.value.price;
//     // //this.product.category={id:myForm.value.ddlCategory};
//     // this.product.FkProductId=myForm.value.ddlCategory;
//     //this.product.tags=myForm.value.tags;
//     //this.product.paymentType=myForm.value.paymentType;
//     this.productService.add(this.product);
//   }
//   onSubmit(myForm:FormGroup) {
//     this.product.FkCategoryId = (this.myForm.get('FkCategoryId') as FormControl).value;
//     this.product.price = (this.myForm.get('price') as FormControl).value;
//     this.product.discount = +(this.myForm.get('discount') as FormControl).value;
   
   
//  // this.product.tags=this.FillProductTags(this.myForm.get('tags') as FormArray);
//    // console.log((((this.myForm.get('data') as FormArray).controls[0]) as FormGroup).controls['name']);
//     console.log(this.product);
//     this.productService.add(this.product);
//     console.log(this.myForm);
//   }
  Onchange(event: Event, i: number) {
    const x = this.paymentTypes[i];
    const arr = (this.myForm.controls['paymentTypes'] as FormArray).controls;
    //console.log(arr);
    if ((event.srcElement as HTMLInputElement).checked) {
      arr.push(new FormControl(x.id));
      // console.log((this.myForm.controls['paymentTypes'] as FormArray).controls);
    }
    else {
      const index = arr.findIndex(a => a.value == x.id);
      arr.splice(index, 1);
      // console.log((this.myForm.controls['paymentTypes'] as FormArray).controls);


    }
  }
  get tags() {
    return (this.myForm.controls['tags'] as FormArray);
  }
  onAddTag(txtName: HTMLInputElement) {
    this.tags.push(new FormControl(txtName.value))
    txtName.value = '';
  }
  onDeleteTag(i: number) {
    this.tags.removeAt(i);
  }
  get langs(): AbstractControl[] {
    const result: AbstractControl[] = [];
    let formGroup: FormGroup;
    for (let i = 0; i < this.lang.length; i++) {
      formGroup = new FormGroup({
        name: new FormControl()
        , description: new FormControl(), langName: new FormControl(this.lang[i])
      });
      result.push(formGroup);
    }
    return result;
  }
  get langData() {
    return this.myForm.get('data') as FormArray;
  }
  selectOption(categoryValue: number) {
    (this.myForm.get('FkCategoryId') as FormControl).setValue(categoryValue);
    //console.log((this.myForm.get('FkCategoryId') as FormControl).value);
  }


}
