import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formControl';
}

export class User {
  userName: void|undefined;
  mail: void|undefined;
  password: void|undefined;
  adress: void|undefined;
}
