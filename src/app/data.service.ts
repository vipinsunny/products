import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const options={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: any = {
    1000: {
      product_name: "Iphone",
      price: "$20",
    },
    1001: {
      product_name: "Redmi",
      price: "$10",
    },
  }

  constructor(private http: HttpClient) { }

  getOptions(){
    let headers=new HttpHeaders()
    return options;
  }

getProducts(product:any){
  const data={}
  //////////asynchronous
  return this.http.post(environment.apiUrl+'/getProducts/' + product,data,this.getOptions())
}
  }
