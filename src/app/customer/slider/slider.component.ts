import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() editMode!: boolean;
  customerForm!: FormGroup;
  genders = ['male', 'female', 'other'];
  id = 0;
  readOnly = '';
  isSubmitted = false;
  buttonAction: string = 'save';
  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: Customer,
    public dialogRef: MatDialogRef<SliderComponent>
  ) {}

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(6)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      gender: ['male'],
      contactNumber: [
        '',
        [Validators.required, Validators.pattern(/^\d{10}$/)],
      ],
      imagePath: ['', Validators.required],
    });

    if (this.editData) {
      this.buttonAction = 'Update';
      this.editMode = true;
      this.customerForm.controls['firstName'].setValue(this.editData.firstName);
      this.customerForm.controls['lastName'].setValue(this.editData.lastName);
      this.customerForm.controls['email'].setValue(this.editData.email);
      this.customerForm.controls['gender'].setValue(this.editData.gender);
      this.customerForm.controls['address'].setValue(this.editData.address);
      this.customerForm.controls['contactNumber'].setValue(
        this.editData.contactNumber
      );
      this.customerForm.controls['imagePath'].setValue(this.editData.imagePath);
    }
  }
  onSubmit() {
    if (!this.editData) {
      this.customerService.addCustomer(this.customerForm.value);
      alert('Customer added successfully');
      this.dialogRef.close('save');
      this.customerForm.reset();
    } else {
      this.id = this.customerService.getIndex(this.editData);
      this.customerService.updateCustomer(this.id, this.customerForm.value);
      alert('Updated the Customer Successfully');
      this.dialogRef.close('update');
      this.customerForm.reset();
    }
  }
  onDeleteCustomer() {
    this.customerService.deleteCustomer(this.id);
    confirm('Are you want to delete it?');
    this.dialogRef.close();
    this.customerForm.reset();
  }
}
