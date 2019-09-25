import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { ToogleAllTodoAction } from '../../actions'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styles: []
})
export class ToDoComponent implements OnInit {

  complete = false

  constructor(private _store:Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll(){
    this.complete = !this.complete
    this._store.dispatch(new ToogleAllTodoAction(this.complete))
  }

}
