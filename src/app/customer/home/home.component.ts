import { Component, OnInit } from '@angular/core';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { CustomerService } from '../customer.service';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  totalLength = 0;
  page = 1;
  filteredString = '';
  constructor(
    public dialog: NgDialogAnimationService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SliderComponent, {
      width: '50rem',
      panelClass: 'fullscreen-dialog',
      position: { right: '0' },
      animation: { to: 'left' },
    });
  }
}
