import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {
  products:any;
  product: any;
  constructor(private ds:DataService) { 
      // this.product=JSON.parse(localStorage.getItem("currentProduct") || "") 
  this.ds.getProducts(this.product)
  .subscribe((result:any)=>{
    console.log(result);
    if(result){
    this.products=result.product
    }
  },
  (result)=>{
    alert(result.error.message)
  }
  )
}
  ngOnInit(): void {
  }

}
