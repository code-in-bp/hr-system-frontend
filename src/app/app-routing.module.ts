import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main.component';
import { HiresListApiComponent } from './components/onboarding/hires-list-api.component';

const routes: Routes = [
/*{path: '', component: UsersListComponent},
  {
    path: 'users', component: UsersListComponent
  },
  { path: 'users/add', component: AddUserProfileComponent},
  {
    path: 'users/edit/:id',
    component: UserEditComponent,
  },
  {
    path: 'users/:id',
    component: ViewUserComponent,
  },
  {path: 'users-api', component: UsersListApiComponent},
*/


{path: '', component: MainComponent},
{path: 'hires', component: HiresListApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
