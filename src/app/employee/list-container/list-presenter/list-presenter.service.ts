import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ListPresenterService {
  
  public userId: Subject<any> = new Subject();
  public userId$!: Observable<any>;
  userData: any = [];

  constructor() { 
    this.userId$=this.userId.asObservable();
  }
  public deleteUser(id: number) {
  
    console.log('delete', id);
    
    this.userId.next(id);
    
  }
  public order(order: string): string {
    if (order === 'asc') {
      return 'desc';
    } else {
      return 'asc';
    }
  }
}
