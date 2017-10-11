import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
 import {WelcomeComponent} from './app.component' ;
 import {HeaderComponent} from './header.component';
  import {FooterComponent} from './footer.component';
  import {MycomComponent} from './mycom/mycom.component';
  import {FavouriteComponent} from './favourite/favourite.component';
  import {CourseService} from './course.service';
  import {FormdemoComponent} from './formdemo/formdemo.component';
  import {PipedemoComponent} from './pipedemo.component';
  import {SummaryPipe} from './summary.pipe';

@NgModule({
  declarations: [
     WelcomeComponent, HeaderComponent, FooterComponent, MycomComponent, FavouriteComponent, FormdemoComponent, PipedemoComponent, SummaryPipe
   ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
 
  bootstrap:  [ WelcomeComponent  ],
  providers: [ CourseService ]
   
})
export class AppModule {}
