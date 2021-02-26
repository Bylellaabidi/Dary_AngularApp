import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  imgs = ['../../assets/img/categories/cat-1.jpg', '../../assets/img/categories/cat-2.jpg',
   '../../assets/img/categories/cat-3.jpg','../../assets/img/categories/cat-4.jpg'];  



  constructor() { }

  ngOnInit(): void {
  }

}
