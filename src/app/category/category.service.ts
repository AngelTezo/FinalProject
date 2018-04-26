import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Category } from './category';
 
@Injectable()
 
// Service for categories data.
export class CategoryService {
 
    // We need Http to talk to a remote server.
    constructor(private _http: Http) { }
 
    // Get list of categories from database via api.
    readCategories(): Observable<Category[]>{
        return this._http
            .get("http://localhost/Proyecto_Final/categoria/read.php")
            .map(res => res.json());
    }

    // Send product data to remote server to create it.
createCategory(product): Observable<Category>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.post(
        "http://localhost/Proyecto_Final/categoria/create.php",
        product,
        options
    ).map(res => res.json());
}

searchCategory(categoria): Observable<Category[]>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.get(
        "http://localhost/Proyecto_Final/categoria/read_one.php?categoria="+categoria
    ).map(res => res.json());
}

// Send product data to remote server to update it.
updateCategory(product): Observable<Category>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.post(
        "http://localhost/Proyecto_Final/categoria/update.php",
        product,
        options
    ).map(res => res.json());
}

// Send product ID to remote server to delete it.
deleteCategory(id_categoria){
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.post(
        "http://localhost/Proyecto_Final/categoria/delete.php",
        { id_categoria: id_categoria },
        options
    ).map(res => res.json());
}
 
}