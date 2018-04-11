import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import{Meterials} from './material.Module';
import { AppComponent,DialogOverviewExampleDialog } from './app.component';
import { DilogDemoComponent } from './dilog-demo/dilog-demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DilogDemoComponent,
    DialogOverviewExampleDialog
    
  ],
  imports: [
    BrowserModule,
    Meterials,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule { }
