import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../model/cart.model';
import { Category } from '../model/category.model';
import { CategoryRepository } from '../model/category.repository';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html'  
})
export class ShopComponent implements OnInit {

    public selectedCategory: Category = null;
    public productsPerPage = 3;
    public selecetedPage = 1;
    public selectedProducts:Product[] =[];



    constructor(
        private productRepository: ProductRepository,
        private categoryRepository: CategoryRepository     
    ) { }

    ngOnInit() {

    }

    get products(): Product[] {
        let index = (this.selecetedPage - 1) * this.productsPerPage;
        this.selectedProducts=this.productRepository.getProducts(this.selectedCategory);
        //0*3=>0
        //1*3 =>3
        //2*3=>6
        return this.selectedProducts
            .slice(index, index + this.productsPerPage);
        //0, 3
        //3, 6
        //6, 9
    }

  

    get pageNumbers(): number[]{
       return  Array(Math.ceil(this.productRepository.getProducts(this.selectedCategory).length/this.productsPerPage))
            .fill(0)
            .map((a,i)=>i+1);

      
    }

   

    changeSelectedPage(p:number)
    {
        this.selecetedPage=p;
    }

  

    changePageSize(size:number){
        this.productsPerPage=size;
        this.changeSelectedPage(1);
    }

    getCategory(category:Category){
        this.selectedCategory=category;
    }


}