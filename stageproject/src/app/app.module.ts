import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstoneComponent } from './firstone/firstone.component';
import { FormsModule } from '@angular/forms';
import { SecondoneComponent } from './secondone/secondone.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    FirstoneComponent,
    SecondoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
