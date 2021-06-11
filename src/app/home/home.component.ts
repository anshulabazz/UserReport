import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: '/home.component.html',
  styleUrls: ['/home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public firebaseservice: FirebaseService) { }

  ngOnInit(): void {
  }
  logout() {
    this.firebaseservice.logout()
  }
  docolor = {
    'background-color': 'black',
    'border': '10px solid black',
    'width': '100px',
    'height':'100px'
  }
}
