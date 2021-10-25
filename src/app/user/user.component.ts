import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../app.component';
import { emailValidator } from './email-validator.component';
import { passwordValidator } from './password-validation.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(4)]],
    credentials : this.fb.group({
      mail: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, passwordValidator]],
    }),
    adress:['']
  })

  newUser: User = new User;

  constructor(private fb: FormBuilder){}

  onSubmit(){
    console.log(this.userForm.value);
  }
}
