import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { RegisterComponent } from './register/register.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { CustomPipe } from './appPipes/custom.pipes';
import { FilterPipe } from './appPipes/filter.pipe';
// import {AngularFireModule} from '@angular/fire/compat';





@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    UpdateRestoComponent,
   
    RegisterComponent,
    ListRestoComponent,
    SignupComponent,
    CustomPipe,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    // AngularFireModule.initializeApp({
    //   apiKey: "AIzaSyAS-oDfhtF6ikHEpfGpk1nB1K10zGhEI3w",
    //   authDomain: "angulra-auth12.firebaseapp.com",
    //   projectId: "angulra-auth12",
    //   storageBucket: "angulra-auth12.appspot.com",
    //   messagingSenderId: "1076219972956",
    //   appId: "1:1076219972956:web:903026cfe1defe90904599"
    // })
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('app module  loaded')
  }
 }
  

 

