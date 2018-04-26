import { RolService } from './rol/rol.service';
import { routes } from './app.routes';
import {TabModule} from 'angular-tabs-component';

import { MarcaService } from './marca/marca.service';

import { CategoryService } from './category/category.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MatAutocompleteModule, MatInputModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ReadCategoryComponent } from './category/read-category/read-category.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';
import { MarcaComponent } from './marca/marca/marca.component';
import { PanelComponent } from './panel.component';
import { ProductoComponent } from './producto/producto/producto.component';
import { RolComponent } from './rol/rol/rol.component';
import { TabsComponentComponent } from './tabs-component/tabs-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadCategoryComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    DeleteCategoryComponent,
    MarcaComponent,
    PanelComponent,
    ProductoComponent,
    RolComponent,
    TabsComponentComponent
  ],
  imports: [
    BrowserModule, HttpModule,FormsModule, ReactiveFormsModule, routes, TabModule,     MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule, BrowserAnimationsModule,
  ],
  providers: [CategoryService,MarcaService,RolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
