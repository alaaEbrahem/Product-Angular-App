import { PaymentType } from './PaymentType';
import { Category } from './Category';
import { ProductData } from './Product-data';

export interface Product{
    id?:number;
    data?:ProductData[],
    price?:number;
    discount?:number;
    FkCategoryId?:number;
    paymentType?:PaymentType[];
   // category?:Category;
    tags?:string[];
    images?:string[];

}