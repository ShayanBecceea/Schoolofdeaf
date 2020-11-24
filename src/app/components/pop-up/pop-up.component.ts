import { Component, Input, OnInit } from '@angular/core';
import { Product, SubProduct } from 'src/app/product';
import { ProductService } from 'src/app/productservice';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  @Input() CategorySelected: string;
  @Input() SubCategorySelected: string;
  @Input() boolCat: boolean;
  @Input() boolSub: boolean;
  @Input() imageSelected: string;

  loading: boolean;

  products: Product[];
  // subProducts: SubProduct[] = [];
 
  sub: SubProduct[] = [];
  subfiltered : SubProduct[] = [];
  
  constructor(private productService: ProductService) {
   }

  async ngOnInit(): Promise<void> {
    this.loading = false;
    console.log(this.CategorySelected);
    console.log(this.SubCategorySelected);
    console.log(this.boolCat);
    console.log(this.boolSub);

    await this.productService.getProducts().then(data => {
      this.products = data;
    });

    this.products = await this.products.filter(e => e.name == this.CategorySelected);

    console.log(this.products[0]);

    if(this.boolCat==false && this.boolSub==true){
        for(let j=0; j < this.products[0].category_details.length;j++) { 
          // console.log(this.products[i].category_details[j]);
          this.subfiltered.push(this.products[0].category_details[j]);
        }
   
      this.sub = this.subfiltered;
   
      // console.log(this.sub);
  
      this.sub = await this.sub.filter(e => e.name == this.SubCategorySelected);
  
      console.log(this.sub[0]);

    }

    this.loading = true;


  }

}
