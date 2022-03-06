import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

totalLength=0;
page=1;
 filteredString='';
// @Output() searchedContent= new EventEmitter<string>()

  constructor(private router:Router,
    private customerService:CustomerService) { }

  ngOnInit(): void {
  }


  addNewCustomer(){
    this.router.navigate(['customer','new']);
  }
}
