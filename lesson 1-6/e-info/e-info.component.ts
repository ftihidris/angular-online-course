import { Component, OnInit } from '@angular/core';

import { NgFor } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DataService } from '../../src/app/services/data/data.service';

@Component({
  selector: 'app-e-info',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './e-info.component.html',
  styleUrl: './e-info.component.css',
  providers: [DataService],
})
export class EInfoComponent implements OnInit {

  infoReceived1: string[]=[];
  infoReceived2: string[]=[];
  infoReceived3: string[]=[];

  getInfoFromServiceClass1(){
    this.infoReceived1 = this.dservice.getInfo1()
  }
  getInfoFromServiceClass2(){
    this.infoReceived1 = this.dservice.getInfo1()
  }
  getInfoFromServiceClass3(){
    this.infoReceived1 = this.dservice.getInfo1()
  }

  constructor(private dservice: DataService){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  updateInfo(frm: any) {
    this.dservice.addInfo(frm.value.location)
  }

}
