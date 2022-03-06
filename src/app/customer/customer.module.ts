import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomerRoutingModule } from './customer-routing.module';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    CardViewComponent,
    ListViewComponent,
    ModalComponent,
    HomeComponent,
    // FilterPipe
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    Ng2SearchPipeModule,
    FlexLayoutModule,
    MatIconModule,
    MatFormFieldModule,
  ],
})
export class CustomerModule {}
