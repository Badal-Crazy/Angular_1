import { Component } from '@angular/core';
import { ProductContract } from '../../src/app/product.contract';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ShopperTemplateComponent {
  title = 'shopee';
  man:string="men's clothing";
  woman:string="women's clothing";
  public categories:string[] = [];
  public products:ProductContract[] = [];
  public cartItems:ProductContract[] = [];
  public cartItemCount:number = 0;
  public isCartVisible:boolean = false;
  

  public LoadCategories():void{
    fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(data=>{
      data.unshift('all');
      this.categories = data;
    })
  }

  public LoadProducts(url:string):void{
    fetch(url)
    .then(data=>data.json())
    .then(data=>{
      this.products = data;
    })
  }

  ngOnInit(){
    this.LoadCategories();
    this.LoadProducts('https://fakestoreapi.com/products');
    this.GetCartItemsCount();
  }

  public CategoryChanged(categoryName:String){
    if(categoryName == 'all'){
      this.LoadProducts('https://fakestoreapi.com/products');
    }
    else{
      this.LoadProducts('https://fakestoreapi.com/products/category/'+categoryName);
    }
  }
  public GetCartItemsCount():void{
    this.cartItemCount = this.cartItems.length;
  }

  public AddtoCart(id:number){
    fetch('https://fakestoreapi.com/products/'+id)
    .then(response=>response.json())
    .then(data=>{
      this.cartItems.push(data);
      this.GetCartItemsCount();
      alert(`${data.title} \nAdded to cart`);
    })
  }

  public ToggleCart(){
    this.isCartVisible = (this.isCartVisible == false)?true:false;
  }

  public RemoveClick(index:number){
    var flag = confirm('Are you sure you want to delete?');
    if(flag==true){
      this.cartItems.splice(index,1);
      this.GetCartItemsCount();
    }
  }

}


