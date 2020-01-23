import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  contacts = [
    {id: 1, name: "Mahardhika", email: "2008madik@gmail.com"},
    {id: 2, name: "Hendri ", email: "2008madik@gmail.com"},
    {id: 3, name: "Putra", email: "2008madik@gmail.com"},
    // {id: 4, name: "Mahardhika", email: "2008madik@gmail.com"}
  ]

  constructor() { }



  public getContacts():Array<{id, name, email}>{
    return this.contacts
  }

  public createContacts(contact: {id,name,email}){
    this.contacts.push(contact)
  }

}
