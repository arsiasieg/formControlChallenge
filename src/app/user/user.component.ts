import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { User } from '../app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userForm = this.fb.group({
    userName: [''],
    credentials : this.fb.group({
      mail: [''],
      password: [''],
    }),
    adress: this.fb.group({
      street:[''],
      city: [''],
      zipCode: ['']
    }),
  })

  newUser: User = new User;

  constructor(private fb: FormBuilder){}

  onSubmit(){
    console.log(this.userForm.value);
  }
}
