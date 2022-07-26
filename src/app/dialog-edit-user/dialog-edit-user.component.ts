import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Broker } from 'src/models/broker.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  broker: Broker;
  loading = false;
  birthDate: Date;
  userId: string;


  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.loading = true;
    this.firestore
    .collection('broker')
    .doc(this.userId)
    .update(this.broker.toJSON())
    .then((result: any) => {
      console.log('Adding user finished', result);
      this.loading = false;
      this.dialogRef.close();
    });
  }
}
