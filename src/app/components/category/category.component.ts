import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/productservice';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  form1SubCategorySelected : string = "";

  chosen(item: string ) {
    this.form1SubCategorySelected = item;
    console.log(this.form1SubCategorySelected);
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

products: Product[];

productsfiltered : Product[];

page: number = 1;

constructor(private productService: ProductService, private modalService: NgbModal) { }

ngOnInit() {
    console.log("Category");
    this.productService.getProducts().then(data => {
      this.productsfiltered = data;
      this.products = this.productsfiltered;
    });
}

getItemsByName(title: string) {
  let re = new RegExp('^' + title, "i");
  this.products = this.productsfiltered.filter(m => re.test(m.name));

  }

  getItemBySearch(title: string) {
    let re = new RegExp('^' + title, "i");
    this.products = this.productsfiltered.filter(m => re.test(m.name));
    this.form1SubCategorySelected = "";
     console.log(this.form1SubCategorySelected);
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

    // open(variable: string) {
    //   const modalRef = this.modalService.open(ModalContentComponent);
    //   modalRef.componentInstance.name = variable;
    //   modalRef.componentInstance.ex = "variable";
    // }
  
}
