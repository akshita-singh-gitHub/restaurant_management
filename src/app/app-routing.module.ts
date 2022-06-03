import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';

const routes: Routes = [
{
  component: AddRestoComponent,
  path: 'add'
  // , outlet:'addLet'
},

{
  component: UpdateRestoComponent,
  path: 'update/:id'
  // , outlet:'update'
},

{
  component: RegisterComponent,
  path: 'register'
  // , outlet:'registerLet'
},
{
  component: ListRestoComponent,
  path: ''
  // ,outlet:'listLet'
},

{
  path: 'company',
  loadChildren : ()=>import('./company/company.module').then(m=>m.CompanyModule)
 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log('app routing  module loaded')
  }
}
