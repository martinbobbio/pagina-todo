import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/to-do';
import { filterValids } from '../model/filter';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter:filterValids): any {

    switch(filter){
      case 'All': return todos
      case 'Completed': return todos.filter(todo => todo.complete)
      case 'Pending': return todos.filter(todo => !todo.complete)
      default: return todos
    }

  }

}
