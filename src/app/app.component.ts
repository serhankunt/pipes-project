import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <h1>Pipes</h1>
    <input [(ngModel)]="search1" type="text">
    <ul>
      <li *ngFor="let name of names | namePipe:search1"> 
          {{name}}
      </li>
    </ul>
    <h1>Pipes 2</h1>
    <input [(ngModel)]="search" type="text">
    <ul>
      <li *ngFor="let user of users | prop:search">
          {{user.name+ " " + user.age }}
      </li>
    </ul>

    <ul>
      <li *ngFor="let item of myArr | sort:fieldName">
              {{item}}
      </li>
    </ul>
  `
})
export class AppComponent {
  search1 : string = "";
  search : string = "";
  fieldName : number = 1;


 names : string[] = [
  "taner",
  "ahmet",
  "ayşe",
  "elif"
 ]

 myArr : number[] = [
 3,4,1,2,5,0
 ]

 users:{
  name:string,
  age:number
 }[]=[
  {
  name:"Taner",
  age:34
 },
 {
  name:"Serhan",
  age:27
 },
 {
  name:"Özge",
  age:28
 }

]
}
