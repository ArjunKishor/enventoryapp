import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidators{
    static ValidateName(control: AbstractControl){
const value = control.value as string;
    if(value.includes('test')){
        return {invalidName:true}
    }
    return null;
    }

    static ValidateSpecialChar(char:string){
    return (control: AbstractControl)=>{
const value = control.value as string;
    if(value.includes(char)){
        return {invalidName:true}
    }
return null;
};
}

static ValidateDate(control: FormGroup){
const checkIn: any = new Date(control.get('checkIn')?.value);
const checkOut: any = new Date(control.get('checkOut')?.value);
const diffDays = checkOut - checkIn;
const diffTime = Math.ceil(diffDays / (1000 * 60 * 60 * 24));
console.log(diffTime);
console.log(diffDays);
if(diffDays < 0){
    control.get('checkOut')?.value.setErrors({invalidDate:true})
            return {invalidName:true}
        }
        return null;
        }
}