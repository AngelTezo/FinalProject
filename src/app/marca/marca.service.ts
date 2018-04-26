import { Marca } from './marca';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MarcaService {

  constructor(private _http: Http) { }

      // Get list of categories from database via api.
      readMarcas(): Observable<Marca[]>{
        return this._http
            .get("http://localhost/Proyecto_Final/marca/read.php")
            .map(res => res.json());
    }

    // Send product data to remote server to create it.
createMarca(product): Observable<Marca>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.post(
        "http://localhost/Proyecto_Final/marca/create.php",
        product,
        options
    ).map(res => res.json());
}

// Send product data to remote server to update it.
updateMarca(product): Observable<Marca>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.post(
        "http://localhost/Proyecto_Final/marca/update.php",
        product,
        options
    ).map(res => res.json());
}

// Send product ID to remote server to delete it.
deleteMarca(id_marca){
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.post(
        "http://localhost/Proyecto_Final/marca/delete.php",
        { id_marca: id_marca },
        options
    ).map(res => res.json());
}

}
