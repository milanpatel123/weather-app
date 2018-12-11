import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddWeatherComponent } from './add-weather.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: AddWeatherComponent
  }
];
@NgModule({
  declarations: [AddWeatherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AddWeatherModule { }
