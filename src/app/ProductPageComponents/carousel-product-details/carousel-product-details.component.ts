import { Component, OnInit,Input  } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-product-details',
  templateUrl: './carousel-product-details.component.html',
  styleUrls: ['./carousel-product-details.component.css']
})
export class CarouselProductDetailsComponent {
    @Input() img_path: string = "";
    images = [
      { path: '../assets/product-details/'+this.img_path+'.jpg', id: '1', title: 'Image 1' },
  
    ];
    
    ngOnChanges() {
      this.
      images = [
        { path: '../assets/product-details/'+this.img_path+'.jpg', id: '1', title: 'Image 1' },
        { path: '../assets/product-details/'+this.img_path+'-2'+'.jpg', id: '2', title: 'Image 2' },
        { path: '../assets/product-details/'+this.img_path+'-3'+'.jpg', id: '3', title: 'Image 3' },
      ];
    }
  
  
    customOptions: OwlOptions = {
      loop: true,
      autoplay: false,
      center: true,
      dots: true,
      animateIn: 'fadeIn',
      autoHeight: true,
      autoWidth: true,
      responsive: {
        0: { items: 1 },
      }
    }
    
  }
  