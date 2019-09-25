import { Component, OnInit } from '@angular/core';
import { SetFilterAction, RemoveCompletedTodoAction } from 'src/app/actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filterValids } from 'src/app/model/filter';

@Component({
  selector: 'app-to-do-footer',
  templateUrl: './to-do-footer.component.html',
  styles: []
})
export class ToDoFooterComponent implements OnInit {

  filters:filterValids[] = ['All', 'Completed', 'Pending']
  filterCurrent:filterValids
  pendings:number
  canRemove:boolean

  constructor(private _store:Store<AppState>) { }

  ngOnInit() {
    this._store.subscribe(state => {
      this.filterCurrent = state.filter
      this.pendings = state.todos.filter(todo => !todo.complete).length
      this.canRemove = this.pendings !== state.todos.length ? true : false
    })
  }

  changeFilter(filter:filterValids){
    this._store.dispatch(new SetFilterAction(filter))
  }

  removeCompleted(){
    this._store.dispatch(new RemoveCompletedTodoAction())
  }

}
