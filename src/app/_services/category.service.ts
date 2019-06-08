import { Category } from '../_model/Category';

export class CategoryService{
    categories:Category[]=[{
        id:1,name:'Arts & Crafts'
    },{
        id:2,name:'Automotive'
    },{
        id:3,name:'Baby'
    },{
        id:4,name:'Books'
    },{
        id:5,name:'Eletronics'
    },{
        id:6,name:'Womens Fashion'
    },{
        id:7,name:'Health & Household'
    },{
        id:8,name:'Home & Kitchen'
    },{
        id:9,name:'Military Accessories'
    },{
        id:10,name:'Movies & Television'
    }];
    getAll():Category[]{
        return this.categories;
    }
}