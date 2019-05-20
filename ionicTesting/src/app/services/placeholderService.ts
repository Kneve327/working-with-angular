import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Todos } from '../todos.model';
import { map } from 'rxjs/operators'

// export enum SearchType {
//   all = '',
//   title = 'title'

// }

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
        console.log('RAW: ', results);
        return results['title'];
      })
    );
  } 
}