import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'angular-firebase-hosting';
  albums: Array<any>;

  constructor() {
    this.albums = [
      {
        title: "One thing at a time",
        singer: "Morgan Wallen"
      },
      {
        title: "Sos",
        singer: "SZA"
      },
      {
        title: "Mañana Será Bonito",
        singer: "Karol G"
      }
     ];
  }

  ngOnInit(): void {
     
  }
}
