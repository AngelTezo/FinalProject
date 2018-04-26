import { CategoryService } from './../category.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css'],
  providers: [CategoryService]
})
export class DeleteCategoryComponent {

  @Output() show_read_category_event = new EventEmitter();
  @Input() id_categoria;

  constructor(private categoryService: CategoryService) { }

  deleteCategory(){
 
    // delete data from database
    this.categoryService.deleteCategory(this.id_categoria)
        .subscribe(
             product => {

                // show an alert to tell the user if product was created or not
                console.log(product);

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
