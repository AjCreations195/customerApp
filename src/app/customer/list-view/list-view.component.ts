import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  page=1;
  customers:Customer[]=[];
  filteredString='';
  constructor( private customerService:CustomerService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.customerService.customersChanged
    .subscribe((customers:Customer[])=>{
    this.customers=customers
    })
    this.customers=this.customerService.getCustomers();
      }
  onEditCustomer(index:number){
    this.router.navigate(['customer',index,'edit']) }
    onDeleteCustomer(index:number){
this.customerService.deleteCustomer(index)
    }

}
