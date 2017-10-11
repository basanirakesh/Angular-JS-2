import {Component} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'my-pipe',
    template: `
        {{course.title | uppercase}}
        <br/>
        {{course.rating | number:'2.2-2'}}
        <br/>
        {{course.students | number}}
        <br/>
        {{course.price | currency:'INR':true}}
        <br/>
        {{course.releaseDate | date}}
        <br/>
        {{course.description | summary:20 }}
        <br/>
        {{course | json}}
    `
})
export class PipedemoComponent{
    course={
        title: "Angular 2 for beginners",
        rating: 4.9343,
        students: 5982,
        price: 99.95,
        releaseDate: new Date(2016,11,1),
        description:`
        asdjfjasdfasdkfasdfjkasdf
        asdfasjkdfasdfjasjdkfajsdjkfajs
        fjaskdfkasdjfjkasdkfjkasdfjkas
        dfjaskdjfkasdfkasjkdfjkas
        fjkasdjfkasdfkasdkfjaksdfj
        fjaksdfjfajshfuoasgdoyfgasduiasd
        `
    }
}