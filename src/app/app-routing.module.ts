import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DrawerComponent} from './drawer/drawer.component';
import {ListComponent} from './list/list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'drawer',
    component: DrawerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
