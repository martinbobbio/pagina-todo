import * as fromActions from '../actions'
import { Todo } from '../model/to-do'
import { filterValids } from '../model/filter';

const todo1 = new Todo("Ganar Abierto Australiano")
const todo2 = new Todo("Ganar Roland Garros")
const todo3 = new Todo("Ganar Wimbledon")
const todo4 = new Todo("Ganar Abierto de los Estados Unidos")

const initialStateTodo:Todo[] = [todo1, todo2, todo3, todo4]
const initialStateFilter:filterValids = 'All'

export function reducerTodo(state = initialStateTodo, action:fromActions.Actions):Todo[]{
    switch(action.type){
        case fromActions.ADD_TODO:
            return [...state, new Todo(action.text)]
        case fromActions.TOGGLE_TODO:
            return state.map(todo => todo.id === action.id ? {...todo, complete: !todo.complete} : todo )
        case fromActions.TOGGLE_ALL_TODO:
            return state.map(todo => {
                return {...todo, complete:action.complete}
            })
        case fromActions.EDIT_TODO:
            return state.map(todo => todo.id === action.id ? {...todo, text:action.text} : todo )
        case fromActions.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id)
        case fromActions.REMOVE_COMPLETED_TODO:
            return state.filter(todo => !todo.complete)
        default: return state
    }
}

export function reducerFilter(state = initialStateFilter, action:fromActions.Actions):filterValids{
    switch(action.type){
        case fromActions.SET_FILTER:
            return action.filter
        default: return state
    }
}