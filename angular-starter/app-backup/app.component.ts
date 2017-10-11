import {Component} from '@angular/core';

@Component({
    selector:'my-app',
    template : `
        <my-pipe></my-pipe>
    `
    // <adp-formdemo></adp-formdemo>
    // <h3> welcome to Angular-2 </h3>
    // <my-header></my-header>
    // <my-footer></my-footer>
    // <aj-mycom></aj-mycom>
    // <adp-favourite></adp-favourite>
    // <adp-favourite (clk)="myhandler($event)" [isFavourite]="myFav.myFavo"></adp-favourite>

})
export class WelcomeComponent{

    myFav = {
        myFavo : true
    }

    myhandler($event) {
        console.log("My event ::"+ $event);
    }

}