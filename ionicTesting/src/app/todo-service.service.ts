import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) { }
}


// *********************************************************


// import { HttpClient ,Response } from '@angular/common/http';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import { getLocaleExtraDayPeriods } from '@angular/common';
// import { Response } from 'selenium-webdriver/http';


// getApiUrl : string = "https://jsonplaceholder.typicode.com/todos";

// getTodos() {

//   return this.http.get(this.getApiUrl)
//           .do((res : Response ) => console.log(res.json())
//           .map((res: Response ) => res.json())
//           .catch(error => console.log(error));
// }