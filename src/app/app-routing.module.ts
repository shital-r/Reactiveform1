import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import {  CreateuserComponent } from './createuser/createuser.component';

const routes: Routes = [
  {path:'',redirectTo:'/userlist',pathMatch:'full'},
  {path:'userlist',component:UserlistComponent},

{path:'createuser',component:CreateuserComponent},
{path:'userdetail/:id',component:CreateuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
