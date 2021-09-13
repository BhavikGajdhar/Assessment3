import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {
  
  private id = this.actRoute.snapshot.params['id'];

  public userDataById$: Observable<any> = of();

  constructor( private restApi: EmployeeService,
    private actRoute: ActivatedRoute) { 
      this.userDataById$ = this.restApi.getUserData(this.id);
    }

  ngOnInit(): void {
  }
  public adduser(userData: any) {
    if (this.id) {
      this.restApi.putUserData(this.id, userData).subscribe();
    } else {
      this.restApi.addUser(userData).subscribe();
    }
  }

}
