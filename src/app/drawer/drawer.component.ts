import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  height: number = document.documentElement.clientHeight;

  nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  state = {
    open: true
  };

  constructor() {
  }

  ngOnInit() {
  }

  onOpenChange(event) {
    console.log(event);
    this.state.open = !this.state.open;
  }

}
