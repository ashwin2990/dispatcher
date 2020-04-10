import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  constructor(private afs: AngularFirestore) {}

  getUpcomingOrders() { 
    return this.afs.collection("Sellers/jNsnLXHRdob7JiF6Pdqd/UpcomingOrders").snapshotChanges();
  }

  createMedicinesOrder(data) {
    return new Promise<any>((resolve, reject) =>{
        this.afs.collection("Buyers/hcv5E5dtenNAkPZ8xyCw/Medicines").add(data).then(res => {}, err => reject(err));
    });
  }
  
  deleteOrder(data) {
      return this.afs.collection("Sellers/jNsnLXHRdob7JiF6Pdqd/UpcomingOrders").doc(data.payload.doc.id).delete();
}


  form = new FormGroup({        
      vendorName: new FormControl(''),
      medicineOrder: new FormControl(''), 
      dailyDosage:new FormControl(''),
      numDays: new FormControl(''),
      completed: new FormControl(false)
  })
}
