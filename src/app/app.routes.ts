import { RolComponent } from './rol/rol/rol.component';
import { ProductoComponent } from './producto/producto/producto.component';
import { MarcaComponent } from './marca/marca/marca.component';
import { ReadCategoryComponent } from './category/read-category/read-category.component';
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";


const appRoutes: Routes = [
  { path: '', redirectTo:'producto', pathMatch: 'full'},
  { path: 'read-category', component: ReadCategoryComponent},
  { path: 'marca', component: MarcaComponent},
  { path: 'producto', component: ProductoComponent},
  { path: 'rol', component: RolComponent}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);