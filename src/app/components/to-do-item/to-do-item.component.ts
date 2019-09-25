import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from 'src/app/model/to-do';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ToogleTodoAction, EditTodoAction, RemoveTodoAction } from '../../actions'

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styles: []
})
export class ToDoItemComponent implements OnInit {

  @Input() todo:Todo
  @ViewChild('inputTextHTML',{static:false}) inputTextHTML:ElementRef

  checkField: FormControl
  inputText: FormControl
  editing:boolean

  constructor(private _store:Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.complete)
    this.inputText = new FormControl(this.todo.text, Validators.required)

    this.checkField.valueChanges.subscribe(() => {
      this._store.dispatch(new ToogleTodoAction(this.todo.id))
    })
  }

  edit(){
    this.editing = true
    setTimeout(() => this.inputTextHTML.nativeElement.select(), 1);
  }

  endEdit(){
    this.editing = false

    if(this.inputText.invalid || this.inputText.value === this.todo.text) return

    this._store.dispatch(new EditTodoAction(this.todo.id, this.inputText.value))
  }

  remove(){
    this._store.dispatch(new RemoveTodoAction(this.todo.id))
  }

}
