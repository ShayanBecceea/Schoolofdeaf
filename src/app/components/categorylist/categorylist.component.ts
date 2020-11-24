import { ProductService } from './../../productservice';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, SubProduct } from 'src/app/product';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.scss']
})
export class CategorylistComponent implements OnInit {
 
  constructor(private route: ActivatedRoute, private productService: ProductService, private modalService: NgbModal) { }
 
  categorySelected: string;
  products: Product[];
  // subProducts: SubProduct[] = [];
 
  sub: SubProduct[] = [];
  subfiltered : SubProduct[] = [];
 
  loading: boolean = false;

  form1SubCategorySelected : string = "";

  chosen(item: string ) {
    this.form1SubCategorySelected = item;
  }

 
  alphabetList: { alphabet: string, posterurl: string}[] = [
    { "alphabet": "a", "posterurl": "../assets/alphabetPNG/a.png"},
    { "alphabet": "b", "posterurl": "../assets/alphabetPNG/b.png"},
    { "alphabet": "c", "posterurl": "../assets/alphabetPNG/c.png"},
    { "alphabet": "d", "posterurl": "../assets/alphabetPNG/d.png"},
    { "alphabet": "e", "posterurl": "../assets/alphabetPNG/e.png"},
    { "alphabet": "f", "posterurl": "../assets/alphabetPNG/f.png"},
    { "alphabet": "g", "posterurl": "../assets/alphabetPNG/g.png"},
    { "alphabet": "h", "posterurl": "../assets/alphabetPNG/h.png"},
    { "alphabet": "i", "posterurl": "../assets/alphabetPNG/i.png"},
    { "alphabet": "j", "posterurl": "../assets/alphabetPNG/j.png"},
    { "alphabet": "k", "posterurl": "../assets/alphabetPNG/k.png"},
    { "alphabet": "l", "posterurl": "../assets/alphabetPNG/l.png"},
    { "alphabet": "m", "posterurl": "../assets/alphabetPNG/m.png"},
    { "alphabet": "n", "posterurl": "../assets/alphabetPNG/n.png"},
    { "alphabet": "o", "posterurl": "../assets/alphabetPNG/o.png"},
    { "alphabet": "p", "posterurl": "../assets/alphabetPNG/p.png"},
    { "alphabet": "q", "posterurl": "../assets/alphabetPNG/q.png"},
    { "alphabet": "r", "posterurl": "../assets/alphabetPNG/r.png"},
    { "alphabet": "s", "posterurl": "../assets/alphabetPNG/s.png"},
    { "alphabet": "t", "posterurl": "../assets/alphabetPNG/t.png"},
    { "alphabet": "u", "posterurl": "../assets/alphabetPNG/u.png"},
    { "alphabet": "v", "posterurl": "../assets/alphabetPNG/v.png"},
    { "alphabet": "w", "posterurl": "../assets/alphabetPNG/w.png"},
    { "alphabet": "x", "posterurl": "../assets/alphabetPNG/x.png"},
    { "alphabet": "y", "posterurl": "../assets/alphabetPNG/y.png"},
    { "alphabet": "z", "posterurl": "../assets/alphabetPNG/z.png"}
  ]
 
  async ngOnInit(): Promise<void> {
    this.categorySelected = "";
    this.route.paramMap.subscribe(params => {
      this.categorySelected = params.get('categorySel');
      console.log("From Url: " +this.categorySelected);
    });
 
    await this.productService.getProducts().then(data => {
      this.products = data;
    });
 
    console.log(this.products);
 
    this.products = await this.products.filter(e => e.name == this.categorySelected);
 
    console.log(this.products);
 
    for(let i=0; i < this.products.length;i++) { 
      for(let j=0; j < this.products[i].category_details.length;j++) { 
        console.log(this.products[i].category_details[j]);
        this.subfiltered.push(this.products[i].category_details[j]);
      }
    }
 
    this.sub = this.subfiltered;
 
    console.log(this.sub);
 
    this.loading = true;
 
    // for(let i=0; i < this.products.length;i++) { 
    //   for(let j=0; j < this.products[i].category_details.length;j++) { 
    //     // console.log(this.products[i].category_details[j].name);
    //     // console.log(this.products[i].category_details[j].image);
    //     const sub: any = [];
    //     sub.name = this.products[i].category_details[j].name;
    //     sub.image = this.products[i].category_details[j].image;
    //     this.subProducts.push(sub);
    //   }
    // }
 
    // console.log(this.subProducts);
 
  }
 
  getItemsByName(title: string) {
    let re = new RegExp('^' + title, "i");
    this.sub = this.subfiltered.filter(m => re.test(m.name));
    }

    
  getItemBySearch(title: string) {
    let re = new RegExp('^' + title, "i");
    this.sub = this.subfiltered.filter(m => re.test(m.name));
    this.form1SubCategorySelected = "";
     console.log(this.form1SubCategorySelected);
    }

    open(variable: string) {
      const modalRef = this.modalService.open(PopUpComponent);
      modalRef.componentInstance.name = variable;
    }
  
    modalShow = false;
    modalleft;
    modaltop;
  
    addClickEvent(e, category) {
      this.form1SubCategorySelected = category;
      if (e.type === 'mousemove') {
  
      }
      else if (e.type === 'mouseenter') {
        this.modalShow = true;
      }
      else if (e.type === 'mouseleave') {
        this.modalShow = false;
      }
      // if (e.type === 'mouseenter') {
      //   this.modalleft = e.clientX
      //   this.modaltop = e.clientY
      //   this.modalShow= true;
  
      // } else if (e.type === 'mouseleave') {
      //   this.modalShow= false;
      // }
    }
 
}