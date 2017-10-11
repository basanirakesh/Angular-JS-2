import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'adp-favourite',
  templateUrl: 'favourite.component.html',
  styleUrls: ['favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.clk.emit({newValue:this.isFavourite});
  }

  constructor() { }

  ngOnInit() {
  }

  @Input() isFavourite = false;

  @Output()
  clk = new EventEmitter();

}
