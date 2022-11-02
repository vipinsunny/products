import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { AllMobilePhonesComponent } from './all-mobile-phones/all-mobile-phones.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    SubCategoriesComponent,
    AllMobilePhonesComponent,
    SmartphonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
