import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';



@Component({
  selector: 'app-login',
  templateUrl: '/login.component.html',
  styleUrls: ['/login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() islogin: EventEmitter<any> = new EventEmitter<any>();
  isSigned = true;
 
  constructor(private router: Router,  public firebaseservice: FirebaseService) {}
 
  ngOnInit(): void {
  }

  async move(email:string,password:string) {

    await this.firebaseservice.signup(email, password)
    if (this.firebaseservice.isloggedIn)
      this.isSigned = true;




    this.router.navigate(['/home'])
  }
  async sigin(email: string, password: string) {

    await this.firebaseservice.signin(email, password)
    if (this.firebaseservice.isloggedIn)
      this.isSigned = true;




    this.router.navigate(['/home'])
  }
  

  

}
