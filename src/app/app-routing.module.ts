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
  component: ListRestoComponent,
  path: 'list'
  // ,outlet:'listLet'
},
{
  component: UpdateRestoComponent,
  path: 'update'
  , outlet:'update'
},

{
  component: RegisterComponent,
  path: 'register'
  // , outlet:'registerLet'
}

// {
//   component: LoginComponent,
//   path: 'login'
// }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
 AddRestoComponent,
 ListRestoComponent,
//  LoginComponent,
 RegisterComponent,
 UpdateRestoComponent
 

]