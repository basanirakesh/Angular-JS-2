import {Router, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {MessagesComponent} from './messages/messages.component';
import {PhotosComponent} from './photos/photos.component';
import {NotFoundComponent} from './not-found.component';

export const routing = RouterModule.forRoot([
    {path:'', component: HomeComponent},
    {path:'messages', component: MessagesComponent},
    {path:'photos', component: PhotosComponent},
    {path:'**', component: NotFoundComponent},
]);