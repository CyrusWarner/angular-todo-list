import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  { HttpClientModule } from '@angular/common/http';
import { AccountService } from './services/account/account-service.ts.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
  ],

  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
