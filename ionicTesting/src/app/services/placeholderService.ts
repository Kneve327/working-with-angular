import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from '../todos.model';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-todos',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })

@Injectable({
  providedIn: 'root'
})
 export class placeholderService 
{
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<Todos[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(
      map(results => {
        console.log('RAW:' , results[0].title);
        return results[0].title;
      })
    );
  } 
}