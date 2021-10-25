import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordValidator(control: AbstractControl) : ValidationErrors|null{
 const passwordRegex = RegExp('(?=.*[A-Z])');
 const passwordValid = passwordRegex.test(control.value);

 const errors = {
     password: {
         rules : "doit contenir au moins une majuscule"
     }
 };

 return !passwordValid? errors : null;
};