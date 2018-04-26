import { RolService } from './../rol.service';
import { Rol } from './../rol';
import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
  providers: [RolService]
})
export class RolComponent implements OnInit {

  create_rol_form: FormGroup;
  update_rol_form: FormGroup;
  msg:string = '';

rols:Rol[];

constructor(private rolservice:RolService, private formBuilder: FormBuilder) 
{       
    
  this.create_rol_form = formBuilder.group(
  {
  nombre: ["", Validators.required],
  activo: ["1"]
  }); 

  this.update_rol_form = formBuilder.group({
      nombre: ["", Validators.required],
      activo: ["1"]
    });

}

rolNuevo;
  // methods that we will use later
createrol(){
    // send data to server
    this.rolservice.createrol(this.create_rol_form.value)
        .subscribe(
             rol => {
              
                this.rolservice.readrols()
                .subscribe(rols =>
                    this.rols=rols['Roles']
                );

             },
             error => console.log(error)
         );
         this.rolNuevo='';
         this.msg = 'campo Agregado';
}
  
  readOneProduct(id){}
  
id_rol;
rolNombre;
hideUpdate:boolean = true;

  editrol(id,name){
   
   this.hideUpdate = false;
   this.id_rol = id;
  this.rolNombre=name;
   


  }

  updaterol()
  {
      this.hideUpdate = true;
           this.update_rol_form.value.id_rol = this.id_rol;
           console.log(this.update_rol_form.value.id_categoria)
   this.rolservice.updaterol(this.update_rol_form.value)
   .subscribe(
        rol => {

          this.rolservice.readrols()
          .subscribe(rols =>
              this.rols=rols['Roles']
              
          );

        },
        error => console.log(this.update_rol_form.value)
    );

    this.msg = 'campo Actualizado';
  }

  deleterol(id){
      var answer = confirm('Estas seguro querer eliminarlo?');
      if(answer) {
          this.rolservice.deleterol(id)
          .subscribe(
               product => {

                  this.rolservice.readrols()
                  .subscribe(rols =>
                      this.rols=rols['Roles']
                  );
  
               },
               error => console.log(error)
           );
           this.msg = 'campo Eliminado';
      }
  }

  // Read products from API.
  ngOnInit(){
      this.rolservice.readrols()
          .subscribe(rols =>
              this.rols=rols['Roles']
          );
}

closeAlert() {
    this.msg = '';
  }

}
