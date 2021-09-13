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

  public searchText!:string;
  // @ViewChild('Form')
  // Form!: NgForm;
  public  reverse: boolean=false;
  public orderType!: string;
  public key!: string;
  curPage!: number;
  pageSize!: number;
  

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
    this.curPage = 1;
    this.pageSize = 10;
  }
 
  ngOnInit(): void {
    if(this.deleteId){
      this.ListPresenter.userId$.subscribe((userId) => {
      this.deleteId.emit(userId);
    });
   }
  
  }
  //Searching Data 
  ngAfterViewInit():void{
    // const inForm =this.Form.valueChanges;
    // inForm!.pipe(
      
    //   map(data=>data.search),
    //   debounceTime(500)
    //   )
    // .subscribe(res=>{
    //  this.search.emit(res)})
  }
  public deleteUser(id: number) {
    
    this.ListPresenter.deleteUser(id)
  }
  //Sorting the data
  public sortData(key: string): void {
    this.reverse = !this.reverse;
    this.key = key;
    this.orderType = this.ListPresenter.order(this.orderType);
    this.sort.emit({ key: this.key, order: this.orderType });
  }
   //Check all checkbox
   public checkAllCheckBox(ev:any) {
		this.userList.forEach(x => x.checked = ev.target.checked)
	}


  //To check whether checkbox is checked or not
	public isAllCheckBoxChecked() {
		return this.userList.every(p => p.checked);
	}
   //Bulk delete method
   public bulkDelete(): void {
		let selectedID:any = this.userList.filter(employee => employee.checked).map(p => p.id);
		
		if(selectedID && selectedID.length > 0) {
      
			this.ListPresenter.deleteUser(selectedID)
		}
	}
  //paggination method for ceil
  public numberOfPages() {
    return Math.ceil(this.userList.length / this.pageSize); 
  }




}
