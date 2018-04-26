import { MarcaService } from './../../marca/marca.service';
import { CategoryService } from './../../category/category.service';
import { ProductoService } from './../producto.service';
import { Producto } from './../producto';
import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Category } from '../../category/category';
import { Marca } from '../../marca/marca';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers: [ProductoService,CategoryService,MarcaService]
  
})
export class ProductoComponent implements OnInit {
 
  create_producto_form: FormGroup;
  update_producto_form: FormGroup;
  search_producto_form: FormGroup;

  msg:string = '';

productos:Producto[];

categories: Category[];

marcas:Marca[];


constructor(private productoservice:ProductoService, private categoryService: CategoryService,private marcaservice:MarcaService, private formBuilder: FormBuilder) 
{       
    this.search_producto_form = formBuilder.group(
        {
            categoria: ["", Validators.required],
            activo: ["1"]
        }); 

  this.create_producto_form = formBuilder.group(
  {
  descripcion: ["", Validators.required],
  id_categoria: ["",Validators.required],
  id_marca: ["",Validators.required],
  activo: ["1"]
  }); 

  this.update_producto_form = formBuilder.group({
      descripcion: ["", Validators.required],
      id_categoria: ["",Validators.required],
      id_marca: ["",Validators.required],
      activo: ["1"]
    });

}

productoNuevo;

hideCreate:boolean = true;

showCreate()
{
this.hideCreate=false;

}

hideeCreate()
{
    this.hideCreate=true;

}

onSearchChange(searchValue : string ) 
{  
    this.productoservice.searchProdcut(searchValue)
    .subscribe(productos =>
        this.productos=productos['Productos']);

}
  // methods that we will use later
createproducto(){
    // send data to server
    this.productoservice.createproducto(this.create_producto_form.value)
        .subscribe(
             producto => {
              
                this.productoservice.readproductos()
                .subscribe(productos =>
                    this.productos=productos['Productos']
                );

             },
             error => console.log(error)
         );
         this.productoNuevo='';
         this.msg = 'campo Agregado';
         
}
  
  readOneProduct(id){}
  
id_producto;
productoNombre;
hideUpdate:boolean = true;

  editproducto(id,name,idcat,idmar){
    this.id_producto=id;
   this.hideUpdate=false;
    this.update_producto_form.patchValue({
      descripcion: name,
      id_categoria: idcat,
      id_marca: idmar
  });
   


  }

  updateproducto()
  {
      this.hideUpdate = true;
           this.update_producto_form.value.id_producto = this.id_producto;
           console.log(this.update_producto_form.value)
   this.productoservice.updateproducto(this.update_producto_form.value)
   .subscribe(
        producto => {

          this.productoservice.readproductos()
          .subscribe(productos =>
              this.productos=productos['Productos']
              
          );

        },
        error => console.log(this.update_producto_form.value)
    );

    this.msg = 'campo Actualizado';
  }

  deleteproducto(id){
      var answer = confirm('Estas seguro querer eliminarlo?');
      if(answer) {
          this.productoservice.deleteproducto(id)
          .subscribe(
               product => {

                  this.productoservice.readproductos()
                  .subscribe(productos =>
                      this.productos=productos['Productos']
                  );
  
               },
               error => console.log(error)
           );
           this.msg = 'campo Eliminado';
      }
  }

  // Read products from API.
  ngOnInit(){
      this.productoservice.readproductos()
          .subscribe(productos =>
              this.productos=productos['Productos']);

          this.categoryService.readCategories()
          .subscribe(categories => this.categories=categories['Categorías']);

          this.marcaservice.readMarcas()
          .subscribe(marcas =>
              this.marcas=marcas['Marcas']);
}

closeAlert() {
    this.msg = '';
  }

}
