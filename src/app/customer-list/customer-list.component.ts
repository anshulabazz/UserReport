import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement1 {
  CustCode: number;
  Customer: string;
  Father: string;
  Address: string;
  Contact: number;
}
const ELEMENT_DATA: PeriodicElement1[] = [
  {
    CustCode: 1, Customer: 'hello', Father: 'Anshul', Address: 'Ha', Contact :233
  },
  { CustCode: 1, Customer: 'hello', Father: 'Anshul', Address: 'Ha', Contact: 233 },
  { CustCode: 1, Customer: 'hello', Father: 'Anshul', Address: 'Ha', Contact: 233 },
  { CustCode: 1, Customer: 'hello', Father: 'Anshul', Address: 'Ha', Contact: 233 },
  { CustCode: 1, Customer: 'hello', Father: 'Anshul', Address: 'Ha', Contact: 233 },
  { CustCode: 1, Customer: 'hello', Father: 'Anshul', Address: 'Ha', Contact: 233 },
  { CustCode: 1, Customer: 'hello', Father: 'Anshul', Address: 'Ha', Contact: 233 },
  { CustCode: 1, Customer: 'hello', Father: 'Anshul', Address: 'Ha', Contact: 233 },
  { CustCode: 1, Customer: 'hello', Father: 'Anshul', Address: 'Ha', Contact: 233 },
  ];



@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  constructor() { }
    ngOnInit(): void {
  
    }

  displayedColumns: string[] = ['CustCode', 'Customer', 'Father','Address','Contact'];
  dataSource = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA);

  
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    
  }


}
