import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  

  apiURL = 'http://localhost:3000/employee';

  constructor(private http:HttpClient) { }
  
  //List for User
  public getUsers(): Observable<any> {
    
    return this.http.get<any>(this.apiURL);
  }
  //Seaching For User
  getSearch(search: string):Observable<any>{
    return this.http.get<any>(this.apiURL+'?q='+search)
  }

  public getUsersAll( key: string, order: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}?q=&_sort=${key}&_order=${order}`);
  }
  //Add User
  public addUser(data: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL, data);
  }

  // Fetch Data By ID
  public getUserData(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/' + id);
  }

  // Update User By ID
  public putUserData(
    id: number,
    data: Employee
  ): Observable<Employee> {
    return this.http.put<Employee>(this.apiURL + '/' + id, data);
  }

  //Delete UserBy Id
  public deleteUser(id:number){
    return this.http.delete<number>(this.apiURL+'/'+id);
  }
}
