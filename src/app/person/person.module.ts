import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { ViewAllComponent, FitlerPipe } from './view-all/view-all.component';
import { PersonComponent } from './person.component';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [
    ViewAllComponent,
    PersonComponent,
    NewComponent,
    FitlerPipe
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    FormsModule
  ]
})
export class PersonModule { }
