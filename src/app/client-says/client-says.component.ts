import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-client-says',
  templateUrl: './client-says.component.html',
  styleUrls: ['./client-says.component.css']
})
export class ClientSaysComponent implements OnInit {

  imgs = ['../../assets/img/testimonial-author/ta-1.jpg', '../../assets/img/testimonial-author/ta-2.jpg'];  
  
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true };
  
  constructor() { }

  ngOnInit(): void {
  }

}
