import { Product } from 'src/app/_model/product';

export class ProductService {
    data: Product[];
    constructor() {
        this.data = [
            { id: 1, data:[{name:'Alaa'}], images: ['assets/img/products/product-grey-1.jpg'], price: 32, discount: 10, },
            { id: 2, data:[{name: 'Alaa Ebrahim'}], images: ['assets/img/products/product-grey-1.jpg'], price: 200, discount: 10 },
            { id: 3, data:[{name: 'sara Ebrahim'}], images: ['assets/img/products/product-grey-1.jpg'], price: 500 },
            { id: 4, data:[{name: 'Ahmad Ebrahim'}], images: ['assets/img/products/product-grey-1.jpg'], price: 20 },
            //{ id: 5, name: 'Aya Ebrahim', image: ['assets/img/products/product-grey-1.jpg'], price: 400, discount: 10 },
           // { id: 5, name: 'Aya Ebrahim', image: ['assets/img/products/product-grey-1.jpg'], price: 400, discount: 10 },

        ];
    }
    getAll():Product[]{
        return this.data;
    }
    getById(id: number):Product {
        return this.data.find(a => a.id === id);

    }
    add(product: Product) {
        product.id= this.data.length+1;
        this.data.push(product);
       console.log(this.data);
    }
    Update(product: Product) {
        const i = this.data.findIndex(a => a.id === product.id);
        this.data[i] = product;
    }
    Delete(id:number){
       const i= this.data.findIndex(a => a.id === id);
       this.data.splice(i,1);
    }
}