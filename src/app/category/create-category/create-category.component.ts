import { CategoryService } from './../category.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
  providers: [CategoryService]
})
export class CreateCategoryComponent{
  
  create_category_form: FormGroup;
 
  // @Output will tell the parent component (AppComponent) that an event happened in this component
  @Output() show_read_category_event = new EventEmitter();



  // initialize 'product service', 'category service' and 'form builder'
  constructor(
      private categoryService: CategoryService,
      formBuilder: FormBuilder
  ){
      // based on our html form, build our angular form
      this.create_category_form = formBuilder.group({
          categoria: ["", Validators.required],
          activo: ["1"]
      });
  }

  // user clicks 'create' button
  createCategory(){

      // send data to server
      this.categoryService.createCategory(this.create_category_form.value)
          .subscribe(
               categoria => {
                  // show an alert to tell the user if product was created or not
                  console.log(categoria);

                  // go back to list of products
                  this.readCategoria();
               },
               error => console.log(error)
           );

           
  }

  // user clicks the 'read products' button
  readCategoria(){
    this.show_read_category_event.emit({
        title: "Listado Categoria"
    });
  }

  // what to do when this component were initialized
  ngOnInit(){
      // read categories from database
  }
}
