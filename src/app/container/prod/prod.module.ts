import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdComponent } from './prod.component';



@NgModule({
  declarations: [ProdComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProdComponent
  ]
})
export class ProdModule { }
