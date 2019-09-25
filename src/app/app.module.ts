import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './app.reducer';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { ToDoFooterComponent } from './components/to-do-footer/to-do-footer.component';
import { ToDoAddComponent } from './components/to-do-add/to-do-add.component';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoListComponent,
    ToDoItemComponent,
    ToDoFooterComponent,
    ToDoAddComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly:environment.production
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
