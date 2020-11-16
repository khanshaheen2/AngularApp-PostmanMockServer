import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PcomponentComponent } from './componet/pcomponent.component';
@NgModule({
  declarations: [
    AppComponent,  PcomponentComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [PcomponentComponent]
})
export class AppModule { }
