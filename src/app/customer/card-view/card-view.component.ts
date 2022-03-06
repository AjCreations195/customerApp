import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css'],
})
export class CardViewComponent implements OnInit {
  page = 1;
  customers: Customer[] = [];
  filteredString='';
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerService.customersChanged.subscribe((customers: Customer[]) => {
      this.customers = customers;
    });
    this.customers = this.customerService.getCustomers();
  }

  onEditCustomer(index: number) {
    this.router.navigate(['customer', index, 'edit']);
    }
  showMore(index:Number){
    this.router.navigate(['customer', index ]);
  }
}
