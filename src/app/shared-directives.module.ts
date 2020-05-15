import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppScreenDirective } from './screen.directive';


const directives = [
  AppScreenDirective
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: directives,
  exports: directives
})
export class SharedDirectivesModule { }
