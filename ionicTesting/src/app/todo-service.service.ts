// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Observable } from 'rxjs/Observable';
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class TodoServiceService {
//   todos: Observable<any>;

//   constructor(public httpClient: HttpClient) {
//     this.todos = this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
//     this.todos
//     .subscribe(data => {
//       console.log('my-data', data);
//     });
//    }
// }


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