import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator (control : AbstractControl) : ValidationErrors|null {
    const emailRegex = RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    const emailValid = emailRegex.test(control.value)

    const errors ={
        mail: {
            rules : "ce n'est pas une adresse mail."
        }
    }

    return !emailValid? errors : null;
}