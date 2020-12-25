import { Component } from '@angular/core';

//This is the decorator
@Component({
  selector: 'app-root', //This is used in the index.html
  templateUrl: './app.component.html', //points to the component html
  styleUrls: ['./app.component.css'] //points to the component css
})
export class AppComponent {
  title = 'App with angular boilerplate';
}
