import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth1Guard } from '../guards/auth1.guard';
import { EmployeeComponent } from './employee.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { ListContainerComponent } from './list-container/list-container.component';

const routes: Routes = [{ path: '', component: EmployeeComponent ,
                        
                        children: [
                        {
                          path: '',
                          component: ListContainerComponent,
                        },
                        {
                          path: 'add',
                          component: FormContainerComponent,
                        },
                        {
                          path: 'edit/:id',
                          component: FormContainerComponent,
                        },
                      
                       ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
