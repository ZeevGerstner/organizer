import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragAndDropModule } from 'angular-draggable-droppable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TaskAppComponent } from './task-app/task-app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SidebarComponent,
    MainPageComponent,
    TaskAppComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
