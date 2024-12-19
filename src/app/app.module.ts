import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TodoTestComponent } from './shared/components/todo-test/todo-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
