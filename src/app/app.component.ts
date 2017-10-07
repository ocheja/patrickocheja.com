import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Patrick Ocheja';

  constructor() { }

  loadCV() {
    window.open('assets/docs/Resume_PatrickOcheja.pdf');
  }
}
