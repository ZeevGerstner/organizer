import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-app',
  templateUrl: './task-app.component.html',
  styleUrls: ['./task-app.component.scss']
})
export class TaskAppComponent implements OnInit {
  artists = [
    'Artist I - Davido',
    'Artist II - Wizkid',
    'Artist III - Burna Boy',
    'Artist IV - Kiss Daniel',
    'Artist V - Mayorkun',
    'Artist VI - Mr. Eazi',
    'Artist VII - Tiwa Savage',
    'Artist VIII - Blaqbonez',
    'Artist IX - Banky W',
    'Artist X - Yemi Alade',
    'Artist XI - Perruzi',
    'Artist XII - Seyi Shay',
    'Artist XIII - Teni'
  ];
  artists1 = [
    'Artist I - Davido',
    'Artist II - Wizkid',
    'Artist XIII - Teni'
  ];
  artists2 = [
    'Artist I - Davido',
    'Artist I - Davido',
    'Artist I - Davido',
    'Artist II - Wizkid',
    'Artist XIII - Teni'
  ];
  
  
  constructor() { }

  ngOnInit() {
  }

}
