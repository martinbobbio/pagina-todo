import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../../model/to-do';
import { filterValids } from 'src/app/model/filter';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styles: []
})
export class ToDoListComponent implements OnInit {

  todos: Todo[] = []
  filter: filterValids

  constructor(private _store:Store<AppState>) { }

  ngOnInit() {
    this._store.subscribe(state => {
      this.todos = state.todos
      this.filter = state.filter
    })
  }

}
