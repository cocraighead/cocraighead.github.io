import { Component } from '@angular/core';
var json = require('./data/data.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = json
  currentPage = 0
}
