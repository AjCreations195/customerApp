import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardViewComponent } from './card-view/card-view.component';
import { HomeComponent } from './home/home.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [

  {path:'',component:HomeComponent,
 children:[
//      {path:'',component:RecipeStartComponent},
//      {path:'new', component:RecipeEditComponent},
//      {path:':id',component:RecipeDetailComponent},
//      {path:':id/edit', component:RecipeEditComponent},
//
{path:'', component:CardViewComponent},
{path:'list-view', component:ListViewComponent},
{path:'new',component:ModalComponent},
{path:':id',component:ModalComponent},
{path:':id/edit',component:ModalComponent}
]
 }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
