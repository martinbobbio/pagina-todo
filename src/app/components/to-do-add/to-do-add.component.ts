import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as fromTodo from '../../actions'

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styles: []
})
export class ToDoAddComponent implements OnInit {

  inputText: FormControl

  constructor(private _store:Store<AppState>) { }

  ngOnInit() {
    this.inputText = new FormControl('', Validators.required)
  }

  addTodo(){
    if(this.inputText.invalid) return
    this._store.dispatch(new fromTodo.AddTodoAction(this.inputText.value))
    this.inputText.setValue('')
  }

}
