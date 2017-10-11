import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'adp-formdemo',
  templateUrl: 'formdemo.component.html',
  styleUrls: ['formdemo.component.css']
})
export class FormdemoComponent implements OnInit {

  constructor() { }

  userdata= {
    username : 'Rakesh basani',
    email : 'rakeshbasani@adp.com',
    password : 'rakeshbasani'
  }

  ngOnInit() {
  }

  onAdd(form: NgForm) {
    console.log(form.value);
  }

}
