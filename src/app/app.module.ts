import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './firebase.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { SalesComponent } from './sales/sales.component';
import { CustomerComponent } from './customer/customer.component';
import { ReportsComponent } from './reports/reports.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuBarsComponent } from './menu-bars/menu-bars.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    SalesComponent,
    CustomerComponent,
    ReportsComponent,
    CustomerListComponent,
    MenuBarComponent,
    MenuBarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
   MatRadioModule,
    MatButtonToggleModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDbJ99V70n4L9I4sZmKL7aVOXZAuf9nnfg",
      authDomain: "project-app-16a0d.firebaseapp.com",
      projectId: "project-app-16a0d",
      storageBucket: "project-app-16a0d.appspot.com",
      messagingSenderId: "472788035477",
      appId: "1:472788035477:web:d61dd80b1d3863bf0df89c"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
