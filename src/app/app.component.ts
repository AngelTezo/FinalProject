import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Proyecto Final';
  id_categoria;

  // properties used to identify what views to show
  show_read_category_html=true;
  show_create_category_html=false;
  show_update_category_html=false;
  show_delete_category_html=false;

// show the 'create product form'
showCreateCategory($event){
 
  // set title
  this.title=$event.title;

  // hide all html then show only one html
  this.hideAll_Html();
  this.show_create_category_html=true;
}

// show the 'update product form'
showUpdateCategory($event){
 
  // set title and product ID
  this.title=$event.title;
  this.id_categoria=$event.id_categoria;

  // hide all html then show only one html
  this.hideAll_Html();
  this.show_update_category_html=true;
}

// show products list
showReadCategory($event){
  // set title
  this.title=$event.title;

  // hide all html then show only one html
  this.hideAll_Html();
  this.show_read_category_html=true;
}

showDeleteCategory($event){
 
  // set title and product ID
  this.title=$event.title;
  this.id_categoria=$event.id_categoria;

  // hide all html then show only one html
  this.hideAll_Html();
  this.show_delete_category_html=true;
}
// hide all html views
hideAll_Html(){
  this.show_read_category_html=false;
  this.show_create_category_html=false;
  this.show_update_category_html=false;
  this.show_delete_category_html=false;

}

}
