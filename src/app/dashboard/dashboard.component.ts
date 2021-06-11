import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  CustCode: number;
  JoiningDate: string;
  CustomerName: string;
  FatherName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { CustCode: 1, JoiningDate: 'mar 85h', CustomerName: 'Anshul', FatherName: 'Ha' },
  { CustCode: 2, JoiningDate: 'mar 85h', CustomerName: 'Anshrtul', FatherName: 'aH'  },
  { CustCode: 3, JoiningDate: 'mar 85h', CustomerName: 'dAnshul', FatherName: 'aH' },
  { CustCode: 4, JoiningDate: 'mar 85h', CustomerName: 'dAnshul', FatherName: 'aH'  },
  { CustCode: 5, JoiningDate: 'mar 85h', CustomerName: 'hAnshul', FatherName: 'Hg' },
  { CustCode: 10, JoiningDate: 'mar 85h', CustomerName: 'hAnshul', FatherName: 'Hk'  },
  { CustCode: 6, JoiningDate: 'mar 75h', CustomerName: 'Ajnshul', FatherName: 'Hf' },
  { CustCode: 165, JoiningDate: 'mar 85h', CustomerName: 'Anjgshul', FatherName: 'fH'  },
  { CustCode: 19, JoiningDate: 'mar 85h', CustomerName: 'Ansdgdhul', FatherName: 'Hk'  },
  { CustCode: 103, JoiningDate: 'mar 85h', CustomerName: 'Anddshul', FatherName: 'Hw'  },
];



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['CustCode', 'JoiningDate', 'CustomerName', 'FatherName'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor() {}
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 
 
}


