import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations:[
    trigger('form',[
      state('in',style({
        opacity:1,
        transform:'translateX(0px)'
      })),
      transition('void =>*',[
        style({
          opacity:0,
          transform:'translateX(50rem)'
        }),
        animate(1000)]),
    ])
  ]
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() showAdd = true;
  editMode = false;
  isSubmitted = false;
  readOnly = false;
  readonlySub = new Subscription();
  customerForm: FormGroup = new FormGroup({});
  id = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });
    this.customerService.isReadonly.subscribe((type: boolean) => {
      console.log(type);

      if (type == true) {
        this.readOnly = true;
      } else {
        this.readOnly = false;
      }
    });
    this.initForm();
  }
  reset() {
    this.customerForm.reset();
    this.isSubmitted = false;
  }

  onSubmit() {
    if (this.editMode) {
      this.customerService.updateCustomer(this.id, this.customerForm.value);
      this.router.navigate(['customer']);
    } else {
      this.customerService.addCustomer(this.customerForm.value);
      this.router.navigate(['../']);
    }
  }
  onDeleteCustomer() {
    this.customerService.deleteCustomer(this.id)
    this.router.navigate(['../../'],{relativeTo: this.route})
  }
  onClose() {
    this.router.navigate(['customer']);
  }

  private initForm() {
    let firstName = '';
    let lastName = '';
    let email = '';
    let address = '';
    let contactNumber = null;
    let imagePath = '';
    if (this.editMode) {
      const customer = this.customerService.getCustomer(this.id);
      firstName = customer.firstName;
      lastName = customer.lastName;
      email = customer.email;
      address = customer.address;
      contactNumber = customer.contactNumber;
      imagePath = customer.imagePath;
    }

    this.customerForm = new FormGroup({
      firstName: new FormControl(firstName, [
        Validators.required,
        Validators.minLength(4),
      ]),
      lastName: new FormControl(lastName, Validators.required),
      email: new FormControl(email, [Validators.required, Validators.email]),
      address: new FormControl(address),
      contactNumber: new FormControl(contactNumber, [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ]),
      imagePath: new FormControl(imagePath, Validators.required),
    });
  }
  ngOnDestroy(): void {
    // if(this.readonlySub){
    //   this.readonlySub.unsubscribe();
    // }
  }
}
