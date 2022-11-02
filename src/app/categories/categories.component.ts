import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
products:any;
product: any; 
isChecked:boolean= false;
  constructor(private ds:DataService) {
  }

  ngOnInit(): void {
  }

}
