import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {

  public userList$ : Observable<any> = of();

  public orderAs!: string;
  public fieldName!: string;
  public searchString!: string;

  constructor( private userservice: EmployeeService) { 
    this.userList$ = this.userservice.getUsers();
  }

  ngOnInit(): void {

  }
  private getUsers(): void {
    this.userList$ = this.userservice.getUsersAll( this.fieldName, this.orderAs);
  }
  private getUsersData(): void {
    this.userList$ = this.userservice.getSearch( this.searchString);
  }
  public onDeleteId(id: number) {
    if (window.confirm('Are you sure, you want to delete?')) {
    
    this.userList$ = this.userservice.deleteUser(id)
  }
}
  public sort(value:any): void {
    this.fieldName = value.key;
    this.orderAs = value.order;
    this.getUsers();
  }
  public search(query: string): void {
    this.searchString = query;
    this.getUsersData();
  }


}
