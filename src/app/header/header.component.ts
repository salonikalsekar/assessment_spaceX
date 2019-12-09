import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // created a separate component for the header, so that we can reuse it for all the other pages in the application
  constructor() { }

  ngOnInit() {
  }

}
