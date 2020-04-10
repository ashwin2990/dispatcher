import { Component, OnInit } from '@angular/core';
import { MedicinesService } from "../services/medicines.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  constructor(public medicinesService: MedicinesService, private router:Router){}

  ngOnInit(): void {}

  medicines = ["Lisotec", "Amlogard", "Repace","Biduret","Betaone"];

  medicineOrder = [];
  addMedicine = medicine => this.medicineOrder.push(medicine);

  removeMedicine = medicine => {
    let index = this.medicineOrder.indexOf(medicine);
    if (index > -1) this.medicineOrder.splice(index, 1);
};

onSubmit()
{
      let data = this.medicinesService.form.value;
      
     this.medicinesService.createMedicinesOrder(data)
         .then(res => {
             /*do something here....
             maybe clear the form or give a success message*/
         });
  this.router.navigate(['/medicines-list']);
}



}
