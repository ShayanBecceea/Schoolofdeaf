// import { ProductService } from './../../productservice';
// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Product, SubProduct } from 'src/app/product';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ModalContentComponent } from '../modal-content/modal-content.component';

// @Component({
//   selector: 'app-categorydetails',
//   templateUrl: './categorydetails.component.html',
//   styleUrls: ['./categorydetails.component.scss']
// })
// export class CategorydetailsComponent implements OnInit {


//   constructor(private route: ActivatedRoute, private productService: ProductService, private modalService: NgbModal) { }

//   categorySelected: string;
//   categorySubSelected: string;
//   products: Product[];
 

//   name: string = "";
//   image: string = "";
//   video: string = "";
//   sign: string = "";

//   imageSelected: string = "";


//   sub: SubProduct[] = [];
//   subfiltered : SubProduct[] = [];
 
//   loading: boolean = false;


//   async ngOnInit() {
//     this.categorySelected = "";
//     this.categorySubSelected = "";
//     this.route.paramMap.subscribe(params => {
//       this.categorySelected = params.get('categorySel');
//       this.categorySubSelected = params.get('subCategorySel');
//       console.log("From Url: " +this.categorySelected);
//       console.log("From Url: " +this.categorySubSelected);
//     });
 
//     await this.productService.getProducts().then(data => {
//       this.products = data;
//     });
 
//     console.log(this.products);
 
//     this.products = await this.products.filter(e => e.name == this.categorySelected);
 
//     console.log(this.products);
 
//     for(let i=0; i < this.products.length;i++) { 
//       for(let j=0; j < this.products[i].category_details.length;j++) { 
//         // console.log(this.products[i].category_details[j]);
//         this.subfiltered.push(this.products[i].category_details[j]);
//       }
//     }
 
//     this.sub = this.subfiltered;
 
//     // console.log(this.sub);

//     this.sub = await this.sub.filter(e => e.name == this.categorySubSelected);

//     console.log(this.sub);
 
//     this.name = this.sub[0].name;
//     this.image = this.sub[0].image;
//     this.video = this.sub[0].video;
//     this.sign = this.sub[0].sign_language;
    
//     this.loading = true;
//   }


//   @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
//   isPlay: boolean = false;
//   toggleVideo(event: any) {
//     this.videoplayer.nativeElement.play();
//   }

//   playPause() {
//     var myVideo: any = document.getElementById("my_video_1");
//     if (myVideo.paused) myVideo.play();
//     else myVideo.pause();
//   }

//   skip(value) {
//     let video: any = document.getElementById("my_video_1");
//     video.currentTime += value;
//   }

//   restart() {
//     let video: any = document.getElementById("my_video_1");
//     video.currentTime = 0;
//   }

//   modalShow = false;
//     modalleft;
//     modaltop;
  
//     addClickEvent(e, category) {
//       this.imageSelected = category;
//       if (e.type === 'mousemove') {
  
//       }
//       else if (e.type === 'mouseenter') {
//         this.modalShow = true;
//       }
//       else if (e.type === 'mouseleave') {
//         this.modalShow = false;
//       }
//       // if (e.type === 'mouseenter') {
//       //   this.modalleft = e.clientX
//       //   this.modaltop = e.clientY
//       //   this.modalShow= true;
  
//       // } else if (e.type === 'mouseleave') {
//       //   this.modalShow= false;
//       // }
//     }

//     open(variable: string) {
//       const modalRef = this.modalService.open(ModalContentComponent);
//       modalRef.componentInstance.name = variable;
//       modalRef.componentInstance.ex = "variable";
//     }
// }


import { ProductService } from './../../productservice';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, SubProduct } from 'src/app/product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.scss']
})
export class CategorydetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private productService: ProductService,public modalService: NgbModal) { }
 
  categorySelected: string;
  categorySubSelected: string;
  products: Product[];
 
 
  thumbnail = "";
  first_image = "Image";
  second_image = "Sign";
  name: string = "";
  image: string = "";
  video: string = "";
  sign: string = "";
  imageSelected: string = "";
 
  sub: SubProduct[] = [];
  subfiltered : SubProduct[] = [];
 
  loading: boolean = false;
 
  async ngOnInit() {
    this.categorySelected = "";
    this.categorySubSelected = "";
    this.route.paramMap.subscribe(params => {
      this.categorySelected = params.get('categorySel');
      this.categorySubSelected = params.get('subCategorySel');
      console.log("From Url: " +this.categorySelected);
      console.log("From Url: " +this.categorySubSelected);
    });
 
    await this.productService.getProducts().then(data => {
      this.products = data;
    });
 
    console.log(this.products);
 
    this.products = await this.products.filter(e => e.name == this.categorySelected);
 
    console.log(this.products);
 
    for(let i=0; i < this.products.length;i++) { 
      for(let j=0; j < this.products[i].category_details.length;j++) { 
        // console.log(this.products[i].category_details[j]);
        this.subfiltered.push(this.products[i].category_details[j]);
      }
    }
 
    this.sub = this.subfiltered;
 
    // console.log(this.sub);
 
    this.sub = await this.sub.filter(e => e.name == this.categorySubSelected);
 
    console.log(this.sub);
 
    this.name = this.sub[0].name;
    this.image = this.sub[0].image;
    this.video = this.sub[0].video;
    this.sign = this.sub[0].sign_language;
    
    this.loading = true;
  }
 
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
 
    modalShow = false;
    modalleft;
    modaltop;
  
    addClickEvent(e, category) {
      this.imageSelected = category;
      if (e.type === 'mousemove') {
  
      }
      else if (e.type === 'mouseenter') {
        this.modalShow = true;
      }
      else if (e.type === 'mouseleave') {
        this.modalShow = false;
      }
       }

  openPopup(name: string, item: string, img: boolean) {
    const modalRef = this.modalService.open(ModalContentComponent, { windowClass: 'my-class'});
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.item = item;
    modalRef.componentInstance.img = img;
    modalRef.componentInstance.header = this.categorySubSelected;
  }
}
 
