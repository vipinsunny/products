import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-mobile-phones',
  templateUrl: './all-mobile-phones.component.html',
  styleUrls: ['./all-mobile-phones.component.css']
})
export class AllMobilePhonesComponent implements OnInit {
  products:any;
  product: any;
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

}
