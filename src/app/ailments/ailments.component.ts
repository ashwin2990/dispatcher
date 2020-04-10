import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ailments',
  templateUrl: './ailments.component.html',
  styleUrls: ['./ailments.component.css']
})
export class AilmentsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClick()
  {
    this.router.navigate(['/medicines']);
  }

}
