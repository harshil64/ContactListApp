import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {
  @ViewChild('addNewContactModal') addNewContactModal!: TemplateRef<any>;
  @Output() refreshDataTable: EventEmitter<boolean> = new EventEmitter();
  dialogRef: MatDialogRef<any, any>;
  contactForm = this.formBuilder.group(
    {
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]]
    },
  );

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private contactService: ContactService) { }

  get f() {
    return this.contactForm.controls;
  }

  openAddDialog(): void {
    this.dialogRef = this.dialog.open(this.addNewContactModal, {
      width: '700px'
    });
  }

  onSave(){
    if(this.contactForm.valid){
      const contactList = this.contactService.getContactList();
      contactList.push({...this.contactForm.value});
      this.contactService.contactList = contactList;  
      this.refreshDataTable.emit();
      this.onModalClose();
      this.contactForm.reset();
    }
  }

  onModalClose(){
    this.dialogRef.close();
  }
}
