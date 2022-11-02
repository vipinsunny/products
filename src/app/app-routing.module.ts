import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMobilePhonesComponent } from './all-mobile-phones/all-mobile-phones.component';
import { CategoriesComponent } from './categories/categories.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';

const routes: Routes = [
  {
    path:'',component:CategoriesComponent
  },
  {
    path:'sub-category',component:SubCategoriesComponent
  },
  {
    path:'all-mobile-phones',component:AllMobilePhonesComponent
  },
  {
    path:'smartphones',component:SmartphonesComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
