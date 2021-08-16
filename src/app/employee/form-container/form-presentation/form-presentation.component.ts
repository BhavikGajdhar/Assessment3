import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employee } from '../../employee.model';
import { FormPresenterService } from '../form-presenter/form-presenter.service';

@Component({
  selector: 'app-form-presentation',
  templateUrl: './form-presentation.component.html',
  styleUrls: ['./form-presentation.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  viewProviders: [FormPresenterService]
})
export class FormPresentationComponent implements OnInit {

  
  private _userIdData: Employee[] = [];
  @Input() public set UserDataById(id: Employee[]){
    if(id){
      this._userIdData = id
    }
    this.userForm.patchValue(this.UserDataById)
  }

  public get UserDataById(): Employee[] {
    return this._userIdData
  }

  @Output() userData = new EventEmitter();
  public userForm: FormGroup = this.userFormPresenter.bindForm();

  constructor( private userFormPresenter: FormPresenterService) {
    this.UserDataById=[]
     }

  ngOnInit(): void {
    this.userFormPresenter.userData$.subscribe((res: any) => {
      this.userData.emit(res);
    });
  }
  public onSubmit() {
    this.userFormPresenter.user(this.userForm) 
  }

}
