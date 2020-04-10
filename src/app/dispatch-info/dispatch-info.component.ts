import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dispatch-info',
  templateUrl: './dispatch-info.component.html',
  styleUrls: ['./dispatch-info.component.css']
})
export class DispatchInfoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClick()
  {
    this.router.navigate(['dispatch-list']);
  }

}
