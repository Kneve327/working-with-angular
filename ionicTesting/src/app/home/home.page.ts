import { placeholderService } from './../services/placeholderService';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users.model';
import { placeholderService } from '../services/placeholderService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users$: User[];
  constructor(private _placeholderService: placeholderService) {

  }

  ngOnInit() {
    return this._placeholderService.getData()
      .subscribe(data => {
        console.log('the data coming back', data);
        this.users$ = data
      });
  }

  text = 'Default starting text';
  onChangeText() {
    this.text = 'Changed!';
  }

  todoToggle() {
    console.log("working");
  }
}
