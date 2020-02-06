import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntryTableComponent} from './entry-table/entry-table.component';
import { SlotsComponent } from './component/slots/slots.component';


const routes: Routes = [{
    path:'', 
    component: SlotsComponent
    },{
    path:'slots',
    component:EntryTableComponent
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
