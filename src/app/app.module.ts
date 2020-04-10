import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { MedicinesListComponent } from './medicines-list/medicines-list.component';
import { MedicinesService } from './services/medicines.service';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { AilmentsComponent } from './ailments/ailments.component';
import { DispatchListComponent } from './dispatch-list/dispatch-list.component';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { DispatchInfoComponent } from './dispatch-info/dispatch-info.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicinesComponent,
    MedicinesListComponent,
    AilmentsComponent,
    DispatchListComponent,
    DispatchInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MedicinesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
