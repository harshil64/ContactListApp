import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContactDetail } from '../models/contact-detail';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNumber'];
  dataSource = new MatTableDataSource<ContactDetail>(this.contactService.getContactList());

  searchField: string;

  constructor(private contactService: ContactService) { }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getNewContactList(){
    this.dataSource.data = this.contactService.getContactList();
  }

  onSearch(){
    this.dataSource.filter = this.searchField;   
  }

}