import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isloggedIn = false;


  constructor(public firebaseauth: AngularFireAuth) { }

  async signin(email: string, password: string) {

    await this.firebaseauth.signInWithEmailAndPassword(email, password).then(res => {

      this.isloggedIn = true
      localStorage.set('users', JSON.stringify(res.user))
    })


    }
  async signup(email: string, password: string) {

    await this.firebaseauth.createUserWithEmailAndPassword(email, password).then(res => {

      this.isloggedIn = true
      localStorage.set('users', JSON.stringify(res.user))
    })


  }
  logout() {
    this.firebaseauth.signOut()
      localStorage.removeItem('users');

    
  }
}
