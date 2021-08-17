import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class FormPresenterService {

  public userData: Subject<any> = new Subject();
  public userData$: Observable<any>;

  constructor(private fb:FormBuilder) {
    this.userData$ = this.userData.asObservable();
   }
   public bindForm(): FormGroup {
    return this.fb.group({
      firstname: ['',[Validators.required,Validators.pattern(/^[a-zA-Z_-]{3,15}$/)]],
      lastname: ['',[Validators.required,Validators.pattern(/^[a-zA-Z_-]{3,15}$/)]],       
      birthdate: ['',Validators.required],      
      gender: ['',Validators.required],       
      department: ['',[Validators.required,Validators.pattern(/^[a-zA-Z_-]{2,15}$/)]],
      enable:['']
    })
  }
  public user(userForm: FormGroup) {
    if (userForm.valid) {
      this.userData.next(userForm.value);
    } 
  }
}
