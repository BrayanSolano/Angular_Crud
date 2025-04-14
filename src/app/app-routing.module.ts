import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';


const routes: Routes = [
  {path: '', component: ListProductsComponent},
  {path: 'add', component: AddEditProductComponent},
  {path: 'edit/:id', component: AddEditProductComponent}, 
  // {path: 'delete/:id', component: },// ruta para editar un producto
  {path: '**', redirectTo: '', pathMatch: 'full'} // redirecciona a la lista de productos si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
