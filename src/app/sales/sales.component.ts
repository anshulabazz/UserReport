import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(public router : Router ) { }

  ngOnInit(): void {
  }
  moveto() {
    this.router.navigate(['/menu-bar'])

  }

}
