import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  imgs = ['../../assets/img/hero/hero-1.jpg', '../../assets/img/hero/hero-2.jpg', '../../assets/img/hero/hero-3.jpg'];  

  CarouselOptions = { items: 3, dots: true, nav: true };
  constructor() { }

  ngOnInit(): void {
  }

}
