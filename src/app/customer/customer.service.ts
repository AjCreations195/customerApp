import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customersChanged = new Subject<Customer[]>();
  selectedCustomer = new Subject<Customer>();

  private customers: Customer[] = [
    new Customer(
      'Allen',
      'Max',
      'allen@gmail.com',
      'male',
      'India',
      125466444,
      'https://tse4.mm.bing.net/th?id=OIP.muMt9p-2cZwTfdavebT4uwHaHa&pid=Api&P=0&w=153&h=153'
    ),
    new Customer(
      'Lilly',
      'Paul',
      'lilly@gmail.com',
      'female',
      'Canada',
      333466444,
      'https://tse4.mm.bing.net/th?id=OIP.yGPcvE2vUlal7X-fIvobzgHaHa&pid=Api&P=0&w=158&h=158'
    ),
    new Customer(
      'Aman',
      'Khan',
      'aman@gmail.com',
      'male',
      'Australia',
      8797466444,
      'https://tse4.mm.bing.net/th?id=OIP.yGPcvE2vUlal7X-fIvobzgHaHa&pid=Api&P=0&w=158&h=158'
    ),
    new Customer(
      'Saam',
      'Neha',
      'aman@gmail.com',
      'female',
      'Australia',
      8797466444,
      'https://tse4.mm.bing.net/th?id=OIP.yGPcvE2vUlal7X-fIvobzgHaHa&pid=Api&P=0&w=158&h=158'
    ),
  ];

  getCustomers() {
    return this.customers.slice();
  }
  getCustomer(index: number) {
    return this.customers[index];
  }
  updateCustomer(index: number, newCustomer: Customer) {
    this.customers[index] = newCustomer;
    this.customersChanged.next(this.customers.slice());
  }
  addCustomer(customer: Customer) {
    this.customers.push(customer);
    this.customersChanged.next(this.customers.slice());
  }
  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
    this.customersChanged.next(this.customers.slice());
  }

  getIndex(customer: Customer) {
    return this.customers.indexOf(customer);
  }
}
