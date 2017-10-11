import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
 

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import { MessagesModule } from './messages/messages.module'; 
import { PhotosModule } from './photos/photos.module';
 import {routing} from './app.routing';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    PhotosModule,
    routing
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule {}
