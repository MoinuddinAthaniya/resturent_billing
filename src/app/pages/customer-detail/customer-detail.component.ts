import { DialogRef } from '@angular/cdk/dialog';
import { Component, ElementRef, Inject, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';


export interface DialogData {
  name: string;
  phone: number;
  address: string;
}


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})

export class CustomerDetailComponent implements AfterViewInit {

  @ViewChild('focused') inputField!: ElementRef;



  constructor(private route: Router, public dialogRef: MatDialogRef<CustomerDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private renderer: Renderer2) {
  }
  ngAfterViewInit(): void {
    this.renderer.selectRootElement(this.inputField.nativeElement).focus();
    // console.log("hello world");
  }


}
