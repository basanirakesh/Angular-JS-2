import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';

@Component({
  moduleId: module.id,
  selector: 'aj-mycom',
  templateUrl: 'mycom.component.html',
  styleUrls: ['mycom.component.css']
})
export class MycomComponent implements OnInit {

  constructor(cs: CourseService) { 
    this.courses = cs.getCourses();
  }

  title: string = "the title of courses page";
  courses;
  imageurl="http://orlandobusinessnews.com/wp-content/uploads/2016/01/adp.jpg";
  isActive=true;

  btnClick($event) {
    console.log($event);
  }

  ngOnInit() {
  }

}
