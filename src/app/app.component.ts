import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = 'Angular life cycle';
  show = false;
  toggle()
  {
   this.show = !this.show;
  }
}
