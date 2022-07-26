import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Broker } from 'src/models/broker.class';

@Component({
  selector: 'app-dialog-edit-adress',
  templateUrl: './dialog-edit-adress.component.html',
  styleUrls: ['./dialog-edit-adress.component.scss']
})
export class DialogEditAdressComponent implements OnInit {

  broker: Broker;
  loading = false;
  userId: string;

  constructor(public dialogRef: MatDialogRef<DialogEditAdressComponent>, private firestore: AngularFirestore) { }

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
