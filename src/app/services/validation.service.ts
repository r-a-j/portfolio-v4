import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class FormValidationService {

    private static readonly EMAIL_REGEX: RegExp = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

    public isValidEmail(control: FormControl): { [key: string]: any } | null {
        const value: string = control.value;
        if (!value) {
            return null;
        }

        return FormValidationService.EMAIL_REGEX.test(value) ? null : { 'invalidEmail': true };
    }

    public static mustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
                return;
            }

            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            } else {
                matchingControl.setErrors(null);
            }
        };
    }

    public static isWhiteSpaceInField(minLength: number, maxLength: number, errorMessage: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const inputValue: string = control?.value;
            if (!inputValue) {
                return null;
            }

            const trimmedValue = inputValue?.trim();
            if (trimmedValue.length < minLength || trimmedValue.length > maxLength) {
                return { noLeadingWhiteSpace: errorMessage };
            } else {
                return null;
            }
        };
    }
}  