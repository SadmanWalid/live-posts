import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private backEndServices:BackEndService, private route :Router) { }

  ngOnInit(): void {
    this.onFetch();
  }
  onSave(){
    this.backEndServices.saveData();
  }

  onFetch(){
    this.backEndServices.fetchData();
    
  }

}
