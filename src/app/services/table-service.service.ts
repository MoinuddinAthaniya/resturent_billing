import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {


  tables = [
    {
      "id": 1,
      "desc": "this first table",
      "status": "Paid",
      "color": "green",
      "enable": true
    },
    {
      "id": 2,
      "desc": "this second table",
      "status": "UnPaid",
      "color": "red",
      "enable": true
    },
    {
      "id": 3,
      "desc": "this third table",
      "status": "Blank",
      "color": "gray",
      "enable": true
    },
    {
      "id": 4,
      "desc": "this fourth table",
      "status": "Blank",
      "color": "gray",
      "enable": true
    },
    {
      "id": 5,
      "desc": "this fifth table",
      "status": "KOT",
      "color": "yellow",
      "enable": true
    },
    {
      "id": 6,
      "desc": "this sixth table",
      "status": "UnPaid",
      "color": "red",
      "enable": true
    },
    {
      "id": 7,
      "desc": "this seventh table",
      "status": "Paid",
      "color": "green",
      "enable": false
    },
    {
      "id": 8,
      "desc": "this eighth table",
      "status": "Blank",
      "color": "gray",
      "enable": true
    },
    {
      "id": 9,
      "desc": "this ninth table",
      "status": "Running",
      "color": "blue",
      "enable": false
    },
  ]

  constructor() {
    localStorage.setItem("tables", JSON.stringify(this.tables));
  }



  //add table

  addTable(table: any) {

    this.tables.push(table);
    localStorage.setItem("tables", JSON.stringify(this.tables));
    return this.tables;
  }

  //remove table

  removeTable() {

  }

  //Update Table

  updateTable() {

  }

  //change Table Access

  ChanegeTableAccess(Table: any) {

  }
  
  //show status

  getStatus() {

  }

  //get Table List

  getAllTables() {
    return localStorage.getItem('tables');
  }

  //Short Table by Status

  TableByStatus() {

  }
}
