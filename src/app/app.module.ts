import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';
import { ProductService } from './productservice';

import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import { CategoryComponent } from './components/category/category.component';
import { AppRoutingModule } from './app-routing.module';
import { CategorylistComponent } from './components/categorylist/categorylist.component';
import { CategorydetailsComponent } from './components/categorydetails/categorydetails.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './components/modal-content/modal-content.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    RatingModule,
    FormsModule,
    AppRoutingModule,
    InfiniteScrollModule,
    NgbModule,
    HttpClientJsonpModule,
    ReactiveFormsModule
  ],
  declarations: [ AppComponent, CategoryComponent, CategorylistComponent, CategorydetailsComponent, PopUpComponent, ModalContentComponent ],
  entryComponents: [ModalContentComponent],
  bootstrap: [ AppComponent ],
  providers: [ProductService]
})

export class AppModule { }
