import { Action } from '@ngrx/store';
import { filterValids } from '../model/filter';

export const ADD_TODO = '[TO-DO] ADD TO-DO'
export class AddTodoAction implements Action{
    readonly type = ADD_TODO
    constructor(public text:string){}
}

export const TOGGLE_TODO = '[TO-DO] TOGGLE TO-DO'
export class ToogleTodoAction implements Action{
    readonly type = TOGGLE_TODO
    constructor(public id:number){}
}

export const TOGGLE_ALL_TODO = '[TO-DO] TOGGLE ALL TO-DO'
export class ToogleAllTodoAction implements Action{
    readonly type = TOGGLE_ALL_TODO
    constructor(public complete:boolean){}
}

export const EDIT_TODO = '[TO-DO] EDIT TO-DO'
export class EditTodoAction implements Action{
    readonly type = EDIT_TODO
    constructor(public id:number, public text:string){}
}

export const REMOVE_TODO = '[TO-DO] REMOVE TO-DO'
export class RemoveTodoAction implements Action{
    readonly type = REMOVE_TODO
    constructor(public id:number){}
}

export const REMOVE_COMPLETED_TODO = '[TO-DO] REMOVE COMPLETED TO-DO'
export class RemoveCompletedTodoAction implements Action{
    readonly type = REMOVE_COMPLETED_TODO
}

export const SET_FILTER = '[FILTER] SET FILTER'
export class SetFilterAction implements Action{
    readonly type = SET_FILTER
    constructor(public filter:filterValids){}
}

export type Actions = AddTodoAction | ToogleTodoAction | ToogleAllTodoAction | EditTodoAction | RemoveTodoAction | RemoveCompletedTodoAction | SetFilterAction