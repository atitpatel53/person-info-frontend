import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { NewComponent } from './new/new.component';


const routes: Routes = [
  {
    path: 'person', component: PersonComponent,
    children: [
      { path: 'all', component: ViewAllComponent },
      { path: 'new', component: NewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
