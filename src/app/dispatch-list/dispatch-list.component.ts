import { Component, OnInit } from '@angular/core';
import { MedicinesService } from "../services/medicines.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-dispatch-list',
  templateUrl: './dispatch-list.component.html',
  styleUrls: ['./dispatch-list.component.css']
})
export class DispatchListComponent implements OnInit {

  constructor(private medicinesService:MedicinesService , private router:Router) { }

  ngOnInit() 
  {this.getOrdersList();}


  OrdersList;

  getOrdersList = () => this.medicinesService.getUpcomingOrders().subscribe(res =>(this.OrdersList = res));
  
  deleteOrder(order)
  {
    this.medicinesService.deleteOrder(order);
    console.log(order.payload.doc.id);
    //this.router.navigate(['/pages/layout/list-scooters',scooter.IMEI]);
  }

  onClick()
  {
    this.router.navigate(['/dispatch-info']);
  }

   
  //OrdersList = [{orderNumber:"1234", customerName:"Abhishek",address:"Baner"},{orderNumber:"5678", customerName:"Raga",address:"Kothrud"},{orderNumber:"9101", customerName:"Debs",address:"Pashan"}];

}
