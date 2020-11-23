import { ProductService } from './../../productservice';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, SubProduct } from 'src/app/product';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.scss']
})
export class CategorydetailsComponent implements OnInit {


  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  categorySelected: string;
  categorySubSelected: string;
  products: Product[];
 

  name = "";
  image = "";
  video = "";
  sign = "";


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

  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  skip(value) {
    let video: any = document.getElementById("my_video_1");
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
  }
}
