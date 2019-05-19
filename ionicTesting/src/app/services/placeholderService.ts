import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from '../users.model';

@Injectable()
export class placeholderService
{
  constructor(private _http: HttpClient) { }
  getData(): Observable<any> {
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  } 
}