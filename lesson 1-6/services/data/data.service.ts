import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[] = ["Adam Taylor", 'E234', 'abc@net.com'];
  info2: string[] = ["Adam Warlock", 'E235', 'abdnet.com'];
  info3: string[] = ["Adam Smasher", 'E236', 'abenet.com'];

  getInfo1(): string [] {
    return this.info1
  }
  getInfo2(): string [] {
    return this.info2
  }
  getInfo3(): string [] {
    return this.info3 
  }

  addInfo(info: string){
    this.info1.push(info);
    this.info2.push(info);
    this.info3.push(info);

    return this.info1
  }

  constructor() { }
}
