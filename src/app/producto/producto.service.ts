import { Producto } from './producto';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProductoService {

  constructor(private _http: Http) { }

  // Get list of categories from database via api.
  readproductos(): Observable<Producto[]>{
    return this._http
        .get("http://localhost/Proyecto_Final/producto/read.php")
        .map(res => res.json());
}

// Send product data to remote server to create it.
createproducto(product): Observable<Producto>{

let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

return this._http.post(
    "http://localhost/Proyecto_Final/producto/create.php",
    product,
    options
).map(res => res.json());
}

searchProdcut(description): Observable<Producto[]>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.get(
        "http://localhost/Proyecto_Final/producto/read_one.php?descripcion="+description
    ).map(res => res.json());
}

// Send product data to remote server to update it.
updateproducto(product): Observable<Producto>{

let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

return this._http.post(
    "http://localhost/Proyecto_Final/producto/update.php",
    product,
    options
).map(res => res.json());
}

// Send product ID to remote server to delete it.
deleteproducto(id_producto){

let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

return this._http.post(
    "http://localhost/Proyecto_Final/producto/delete.php",
    { id_producto: id_producto },
    options
).map(res => res.json());

}


}
