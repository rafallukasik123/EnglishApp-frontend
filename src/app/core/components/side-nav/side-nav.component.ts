import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    options = {
    bottom: 0,
    fixed: false,
    top: 0
  };
  constructor() { }

  ngOnInit(): void {
  }

}
