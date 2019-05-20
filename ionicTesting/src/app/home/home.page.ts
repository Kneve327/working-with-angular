import { placeholderService } from './../services/placeholderService';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from '../todos.model';
// import { placeholderService } from '../services/placeholderService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  todos$: Todos[];
  text = 'Default starting text';
  constructor(private placeholderService: placeholderService) {

  }

  ngOnInit() {
    return this.placeholderService.getData()
      .subscribe(data => {
        console.log('the data coming back', data);
        this.todos$ = data;
      });
  }

  onChangeText() {
    this.text = 'Changed!';
  }

  todoToggle() {
    console.log('working');
  }
}
