import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service'

@Component({
  	selector: 'app-contacts',
  	templateUrl: './contacts.component.html',
  	styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    inputSearch = "";

	  currentPage:number = 0;

	  pageSize:number = 5;

	  totalPages:number;

	  contactsData:any;

    inputContactForm = {lastName:"", firstName:"", email:"", tel:""};

  	constructor(private contactService:ContactsService) { }

    /**
    * Method requested by the component during his initialization
    */
  	ngOnInit() {
  		this.goToContactPageByKeyWord(0)
  	}

    /**
    * Ask all contacts with REST with specific parameters
    * @param {number} pageNum : 
    */
  	goToContactPageByKeyWord(pageNum:number) {
  		this.currentPage = pageNum;
  		this.contactService.getContactJson(this.inputSearch, this.pageSize, this.currentPage).subscribe(
  			data=>{
  				this.totalPages = Math.round(Number(data.totalHits)/this.pageSize);
  				this.contactsData = data;
  			},
  			err=>{
  				console.log(err);
  			}
  		)
  	}

    /**
    * Ask all contacts with REST with specific parameters
    * @param {Array} formData : All paramaters provided by contactForm
    */
    onAddContact(formData) {
      console.log(formData);

    }

}
