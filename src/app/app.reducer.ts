import { Todo } from './model/to-do';
import { reducerFilter, reducerTodo } from './reducers';
import { ActionReducerMap } from '@ngrx/store';
import { filterValids } from './model/filter';

export interface AppState {
    todos: Todo[],
    filter: filterValids
}

export const reducers: ActionReducerMap<AppState> = {
    todos: reducerTodo,
    filter: reducerFilter
}