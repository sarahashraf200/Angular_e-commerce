import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css']
})
export class RelatedProductsComponent implements OnInit {
  images = [
    { path: '../assets/related-items/product-02.jpg', id: '1', title: 'Image 1' },
    { path: '../assets/related-items/product-03.jpg', id: '2', title: 'Image 2' },
    { path: '../assets/related-items/product-04.jpg', id: '3', title: 'Image 3' },
    { path: '../assets/related-items/product-05.jpg', id: '4', title: 'Image 4' },
    { path: '../assets/related-items/product-06.jpg', id: '5', title: 'Image 5' },
    { path: '../assets/related-items/product-07.jpg', id: '6', title: 'Image 6' },
    { path: '../assets/related-items/product-08.jpg', id: '7', title: 'Image 7' },

  ];
  constructor() { }

  ngOnInit(): void {
  }
  
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    dots: false,
    animateIn: 'fadeIn',
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: { items: 3 },
    }
  }
}
