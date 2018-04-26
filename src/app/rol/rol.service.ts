import { Rol } from './rol';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class RolService {
  
  constructor(private _http: Http) { }

  // Get list of categories from database via api.
  readrols(): Observable<Rol[]>{
    return this._http
        .get("http://localhost/Proyecto_Final/rol/read.php")
        .map(res => res.json());
}

// Send product data to remote server to create it.
createrol(product): Observable<Rol>{

let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

return this._http.post(
    "http://localhost/Proyecto_Final/rol/create.php",
    product,
    options
).map(res => res.json());
}

// Send product data to remote server to update it.
updaterol(product): Observable<Rol>{

let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

return this._http.post(
    "http://localhost/Proyecto_Final/rol/update.php",
    product,
    options
).map(res => res.json());
}

// Send product ID to remote server to delete it.
deleterol(id_rol){

let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

return this._http.post(
    "http://localhost/Proyecto_Final/rol/delete.php",
    { id_rol: id_rol },
    options
).map(res => res.json());

}

}
