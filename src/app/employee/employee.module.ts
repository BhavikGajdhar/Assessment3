import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { FormPresentationComponent } from './form-container/form-presentation/form-presentation.component';
import { ListPresentationComponent } from './list-container/list-presentation/list-presentation.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    FormContainerComponent,
    ListContainerComponent,
    FormPresentationComponent,
    ListPresentationComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
