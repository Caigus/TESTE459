import { Component, OnInit } from '@angular/core';
import { Aluguel } from '../models/Aluguel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public titulo = 'Brunsker'

 
  constructor() { }

  ngOnInit(): void {
  }

}
