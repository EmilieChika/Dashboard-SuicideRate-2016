import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ChartsModule} from 'ng2-charts';
import { BarComponent } from './bar/bar.component';
import { BarButtonComponent } from './bar-button/bar-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    BarButtonComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
