import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgs = ['../../assets/img/feature-property/fp-1.jpg', '../../assets/img/feature-property/fp-2.jpg'];  
  
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true };
  constructor() { }

  ngOnInit(): void {
  }

}
