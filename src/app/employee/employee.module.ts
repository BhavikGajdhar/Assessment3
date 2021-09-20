import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { ListPresentationComponent } from './list-container/list-presentation/list-presentation.component';
import { FormPresentationComponent } from './form-container/form-presentation/form-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './list-container/list-presentation/filter.pipe';
import { Auth1Guard } from '../guards/auth1.guard';



@NgModule({
  declarations: [
    EmployeeComponent,
    ListContainerComponent,
    FormContainerComponent,
    ListPresentationComponent,
    FormPresentationComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService,Auth1Guard],
})
export class EmployeeModule { }
