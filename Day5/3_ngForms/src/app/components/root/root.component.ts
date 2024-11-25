import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  pList: Array<string>;
  name: string;
  num: number;
  person: { id: number, name: string, address: { city: string, pin: number } };
  today: Date;
  flag: boolean;

  constructor() {
    this.pList = ["Manish", "Abhijeet", "Abhishek", "Ramakant", "Subodh", "Pravin", "Nikita", "Lakhan", "Dipak", "Neeraj", "Pavitr"];
    this.name = "manish sharma";
    this.num = Math.PI;
    this.person = { id: 1, name: "Manish", address: { city: "Pune", pin: 411021 } };
    this.today = new Date();
    this.flag = true;
  }

  get format() { return this.flag && 'fullDate' || 'shortDate'; }

  updateFlag() {
    this.flag = !this.flag;
  }
}