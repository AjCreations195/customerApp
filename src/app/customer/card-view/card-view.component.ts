import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css'],
})
export class CardViewComponent implements OnInit {
  page = 1;
  showDialog = false;
  customerSelected!: Customer;
  customers: Customer[] = [];
  filteredString = '';
  constructor(
    private customerService: CustomerService,
    private router: Router,
    public dialog: NgDialogAnimationService
  ) {}

  ngOnInit(): void {
    this.customerService.customersChanged.subscribe((customers: Customer[]) => {
      this.customers = customers;
    });
    this.customers = this.customerService.getCustomers();
  }

  onEditCustomer(customer: Customer) {
    this.dialog.open(SliderComponent, {
      data: customer,
      width: '50%',
      panelClass: 'fullscreen-dialog',
      position: { right: '0' },
      animation: { to: 'left' },
    });
  }
  showMore(customer: Customer) {
    this.dialog.open(SliderComponent, {
      data: customer,
      width: '50%',
      panelClass: 'fullscreen-dialog',
      position: { right: '0' },
      animation: { to: 'left' },
    });
    this.customerService.isReadonly.next(true);
  }
}
