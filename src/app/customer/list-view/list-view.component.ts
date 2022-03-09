import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent implements OnInit {
  page = 1;
  customers: Customer[] = [];
  filteredString = '';
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
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
      width: '50rem',
      panelClass: 'fullscreen-dialog',
      position: { right: '0' },
      animation: { to: 'left' },
    });
  }
  onDeleteCustomer(index: number) {
    if (confirm('Are You Sure?')) {
      this.customerService.deleteCustomer(index);
    }
  }
}
