import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../services/records/records.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-emp-info',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './emp-info.component.html',
  styleUrl: './emp-info.component.css',
  providers: [RecordsService],
})
export class EmpInfoComponent implements OnInit {

  infoReceived1: string[]=[];
  infoReceived2: string[]=[];
  infoReceived3: string[]=[];

  getInfoFromServiceClass1(){
    this.infoReceived1 = this.rservice.getInfo1()
  }
  getInfoFromServiceClass2(){
    this.infoReceived1 = this.rservice.getInfo1()
  }
  getInfoFromServiceClass3(){
    this.infoReceived1 = this.rservice.getInfo1()
  }

  constructor(private rservice: RecordsService) {}

  ngOnInit(): void {
    
  }
}
