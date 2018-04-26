import { MarcaService } from './../marca.service';
import { Marca } from './../marca';
import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css'],
  providers: [MarcaService]
})
export class MarcaComponent implements OnInit {

  create_marca_form: FormGroup;
  update_marca_form: FormGroup;
  msg:string = '';

marcas:Marca[];

constructor(private marcaservice:MarcaService, private formBuilder: FormBuilder) 
{       
    
  this.create_marca_form = formBuilder.group(
  {
  marca: ["", Validators.required],
  activo: ["1"]
  }); 

  this.update_marca_form = formBuilder.group({
      marca: ["", Validators.required],
      activo: ["1"]
    });

}

MarcaNuevo;
  // methods that we will use later
createMarca(){
    // send data to server
    this.marcaservice.createMarca(this.create_marca_form.value)
        .subscribe(
             marca => {
              
                this.marcaservice.readMarcas()
                .subscribe(marcas =>
                    this.marcas=marcas['Marcas']
                );

             },
             error => console.log(error)
         );
         this.MarcaNuevo='';
         this.msg = 'campo Agregado';
}
  
  readOneProduct(id){}
  
id_marca;
marcaNombre;
hideUpdate:boolean = true;

  editMarca(id,name){
   
   this.hideUpdate = false;
   this.id_marca = id;
  this.marcaNombre=name;
   


  }

  updateMarca()
  {
      this.hideUpdate = true;
           this.update_marca_form.value.id_marca = this.id_marca;
           console.log(this.update_marca_form.value.id_categoria)
   this.marcaservice.updateMarca(this.update_marca_form.value)
   .subscribe(
        marca => {

          this.marcaservice.readMarcas()
          .subscribe(marcas =>
              this.marcas=marcas['Marcas']
              
          );

        },
        error => console.log(this.update_marca_form.value)
    );

    this.msg = 'campo Actualizado';
  }

  deleteMarca(id){
      var answer = confirm('Estas seguro querer eliminarlo?');
      if(answer) {
          this.marcaservice.deleteMarca(id)
          .subscribe(
               product => {

                  this.marcaservice.readMarcas()
                  .subscribe(marcas =>
                      this.marcas=marcas['Marcas']
                  );
  
               },
               error => console.log(error)
           );
           this.msg = 'campo Eliminado';
      }
  }

  // Read products from API.
  ngOnInit(){
      this.marcaservice.readMarcas()
          .subscribe(marcas =>
              this.marcas=marcas['Marcas']
          );
}

closeAlert() {
    this.msg = '';
  }


}
