import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedDirectivesModule } from './shared-directives.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedDirectivesModule
  ],
  entryComponents: [

  ],

  providers: [
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
