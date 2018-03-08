import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class ContactsService {

  constructor(private http:Http) { }

  	/**
  	* Ask all contacts with REST with specific parameters
  	* @param {string} keyWord : Word wich going do be searched
  	* @param {number} pageNum : Page number selected
  	* @param {number} pageSize : Number of results
  	*/
  	getContactJson(keyWord:string, pageSize:number, pageNum:number) {
  		return this.http.get("http://localhost:8181/contactsByKeyWord?keyWord="+keyWord+"&pageNum="+pageNum+"&pageSize="+pageSize)
  			.map(resp=>resp.json());
  	}

    /**
    * Ask the creation of a new contact with REST
    * @param {} contactData :  
    */
    addContact(contactData) {
      
      return null;
    } 

}
