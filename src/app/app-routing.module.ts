import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicinesComponent } from './medicines/medicines.component';
import { MedicinesListComponent } from  './medicines-list/medicines-list.component';
import {AilmentsComponent} from './ailments/ailments.component';
import {DispatchListComponent} from './dispatch-list/dispatch-list.component';
import { DispatchInfoComponent } from './dispatch-info/dispatch-info.component';

const routes: Routes = [
    { path: 'medicines', component: MedicinesComponent },
    { path: 'ailments', component: AilmentsComponent },
    { path: '', component: AilmentsComponent },
    { path: 'medicines-list', component: MedicinesListComponent },
    { path: 'dispatch-list', component: DispatchListComponent },
    { path: 'dispatch-info', component: DispatchInfoComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
