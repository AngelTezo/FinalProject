import { CategoryService } from './../category.service';
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
  providers: [CategoryService]
})
export class UpdateCategoryComponent {

// our angular form
update_category_form: FormGroup;
 
@Output() show_read_category_event = new EventEmitter();
@Input() id_categoria;



// initialize product & category services
constructor(
    private productService: CategoryService,
    private formBuilder: FormBuilder
){

    // build angular form
    this.update_category_form = this.formBuilder.group({
      categoria: ["", Validators.required],
      activo: ["1"]
    });
}

// user clicks 'create' button
updateCategory(){

    // add product_id in the object so it can be updated
    this.update_category_form.value.id_categoria = this.id_categoria;

    // send data to server
    this.productService.updateCategory(this.update_category_form.value)
        .subscribe(
             category => {
                // go back to list of products
                this.readCategory();
             },
             error => console.log(error)
         );
}

// user clicks the 'read products' button
readCategory(){
    this.show_read_category_event.emit({ title: "Listado de Categorias" });
}


}
