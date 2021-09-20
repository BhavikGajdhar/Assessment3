import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // { 
  //   path: '',
  //  redirectTo: 'login', pathMatch: 'full' 
  // },
  {
    path: '',
    component: LoginComponent
  }, 
  { 
    path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
  },
  {
    path:'**',redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
