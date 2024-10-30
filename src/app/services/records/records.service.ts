import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
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

  constructor() { }
}
