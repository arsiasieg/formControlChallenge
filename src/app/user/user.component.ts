import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userName = new FormControl('');
  mail = new FormControl('');
  password = new FormControl('');
  adress = new FormControl('');

  newUser: User = new User;


  inscription(){
    this.newUser.userName = this.userName.value;
    this.newUser.mail = this.mail.value;
    this.newUser.password = this.password.value;
    this.newUser.adress = this.adress.value;
  }
}
