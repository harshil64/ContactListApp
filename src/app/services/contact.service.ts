import { Injectable } from '@angular/core';
import { ContactDetail } from '../models/contact-detail';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactList: any = [
    {firstName: 'James',lastName: 'Hydrogen', email: 'james@mail.com', phoneNumber: 7894561230},
    {firstName: 'Mitchell',lastName: 'Helium', email: 'mitchell@mail.com', phoneNumber: 1234567890},
    {firstName: 'Sara',lastName: 'Lithium', email: 'sara@mail.com', phoneNumber: 8888888888}
  ]

  constructor() { }

  getContactList() {
    return this.contactList;
  }
}
