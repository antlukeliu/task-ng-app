import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {  MatTableModule } from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { TaskTableComponent } from './task-table/task-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskTableComponent
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
