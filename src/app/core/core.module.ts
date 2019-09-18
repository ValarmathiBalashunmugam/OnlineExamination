import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClient,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    HttpClient,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
