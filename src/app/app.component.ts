import {Component} from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 

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

    constructor(private productService: ProductService, private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);
    }
}
