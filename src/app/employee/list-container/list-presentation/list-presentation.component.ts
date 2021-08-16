import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';
import { Employee } from '../../employee.model';
import { ListPresenterService } from '../list-presenter/list-presenter.service';

@Component({
  selector: 'app-list-presentation',
  templateUrl: './list-presentation.component.html',
  styleUrls: ['./list-presentation.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  viewProviders:[ListPresenterService]
})
export class ListPresentationComponent implements OnInit,AfterViewInit {

  searchText!: string;
  @ViewChild('Form')
  Form!: NgForm;
  public  reverse!: boolean;
  public orderType!: string;
  public key!: string;

  @Input() public set userList(id: Employee[]){
    
    if(id){
      this._userList = id
    }
  }

  public get userList(): Employee[] {
    return this._userList
  }
  @Output() public sort: EventEmitter<any>=new EventEmitter();
  @Output() public search: EventEmitter<any>=new EventEmitter();
  @Output() public deleteId:EventEmitter<any> = new EventEmitter();
 
  private _userList: Employee[] = [];

  constructor(private ListPresenter:ListPresenterService
    ) { 
    this._userList=[];
  }
 
  ngOnInit(): void {
    if(this.deleteId){
      this.ListPresenter.userId$.subscribe((userId) => {
      this.deleteId.emit(userId);
    });
   }
  
  }
  ngAfterViewInit():void{
    const inForm =this.Form.valueChanges;
    inForm!.pipe(
      
      map(data=>data.search),
      debounceTime(500),
      // switchMap(res=>this.api.getSearch(res))
      )
    .subscribe(res=>{
     this.search.emit(res)})
  }
  public deleteUser(id: number) {
    
    this.ListPresenter.deleteUser(id)
  }
  
  public sortData(key: string): void {
    this.reverse = !this.reverse;
    this.key = key;
    this.orderType = this.ListPresenter.order(this.orderType);
    this.sort.emit({ key: this.key, order: this.orderType });
  }



}
