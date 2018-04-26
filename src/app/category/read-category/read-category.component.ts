import { CategoryService } from './../category.service';
import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../category';
import { FormGroup,FormArray, NgControl , FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-read-category',
  templateUrl: './read-category.component.html',
  styleUrls: ['./read-category.component.css'],
  providers: [CategoryService]
})
export class ReadCategoryComponent implements OnInit {

    create_category_form: FormGroup;
    update_category_form: FormGroup;

    msg:string = '';

  categories:Category[];

  constructor(private categoriservice:CategoryService, private formBuilder: FormBuilder) 
  {       
      
    this.create_category_form = formBuilder.group(
    {
    categoria: ["", Validators.required],
    activo: ["1"]
    }); 

    this.update_category_form = formBuilder.group({
        categoria: ["", Validators.required],
        activo: ["1"]
      });

  }

  employees = [];

  model:any = {};

  @Output() show_create_category_event=new EventEmitter();
  @Output() show_update_category_event=new EventEmitter();
  @Output() show_delete_category_event=new EventEmitter();

    // methods that we will use later
    CategoriaNuevo;
    tem;
    activo = 1;

  addCategory()
  {
    
    console.log(this.create_category_form.value);
    this.employees.push(this.create_category_form.value);
    this.model={};
    this.msg = 'campo agregado';
    

  }  

 createCategory(){
      // send data to server
      this.categoriservice.createCategory(this.create_category_form.value)
          .subscribe(
               categoria => {
                  // show an alert to tell the user if product was created or not
                  console.log(categoria);
                  this.categoriservice.readCategories()
                  .subscribe(categories =>
                      this.categories=categories['Categorías']
                  );

               },
               error => console.log(error)
           );

           this.CategoriaNuevo 
           this.msg = 'campo Agregado';
}
    
    readOneProduct(id){}
    
id_category;
CategoriaNombre;
my_Class='nav-item'
hideUpdate:boolean = true;

    editCategory(id,name){
     
     this.hideUpdate = false;
     this.id_category = id;
    this.CategoriaNombre=name;
     


    }

    cancel(){
        
       }
   
    updateCategory()
    {
        this.hideUpdate = true;
             this.update_category_form.value.id_categoria = this.id_category;
             console.log(this.update_category_form.value.id_categoria)
     this.categoriservice.updateCategory(this.update_category_form.value)
     .subscribe(
          category => {

            this.categoriservice.readCategories()
            .subscribe(categories =>
                this.categories=categories['Categorías']
                
            );

          },
          error => console.log(this.update_category_form.value)
      );

      this.msg = 'campo actualizado';
    }

    deleteCategory(id){
        var answer = confirm('Estas seguro querer eliminarlo?');
        if(answer) {
            this.categoriservice.deleteCategory(id)
            .subscribe(
                 product => {

                    this.categoriservice.readCategories()
                    .subscribe(categories =>
                        this.categories=categories['Categorías']
                    );
    
                 },
                 error => console.log(error)
             );

             this.msg = 'campo eliminado';
        }
    }

    closeAlert() {
        this.msg = '';
      }
 
    insertCategory() {
        console.log(this.employees)  
      this.employees.forEach(employee => {

        this.categoriservice.createCategory(employee)
        .subscribe(
             categoria => {
                // show an alert to tell the user if product was created or not
                console.log(categoria);
                this.categoriservice.readCategories()
                .subscribe(categories =>
                    this.categories=categories['Categorías']
                );

             },
             error => console.log(error)
         );

         this.CategoriaNuevo 
         this.msg = 'campo Agregado';
            
        });
      }
 
    // Read products from API.
    ngOnInit(){
        this.categoriservice.readCategories()
            .subscribe(categories =>
                this.categories=categories['Categorías']
            );
  }



}