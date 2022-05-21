import { Component, OnInit, Input} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {
  @Input() img_path: string = "";
  images = [
    { path: '/assets/product-details/'+this.img_path+'.jpg', id: '1', title: 'Image 1' },

  ];

  
  ngOnChanges() {
   
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

  // constructor() { }

  ngOnInit(): void {
    this.
    images = [
      { path: '/assets/product-details/'+"61FYIg8gEPL._SX3000_"+'.jpg', id: '1', title: 'Image 1' },
      { path: '/assets/product-details/'+"61i-58WWHPL._SX3000_ - Copy"+'.jpg', id: '2', title: 'Image 2' },
      { path: '/assets/product-details/'+"712EmSWjLLL._SX3000_"+'.jpg', id: '3', title: 'Image 3' },
    ];
  }

}
