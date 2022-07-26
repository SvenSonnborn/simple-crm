import { Component, OnInit } from '@angular/core';
import { Broker } from 'src/models/broker.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-add-broker',
  templateUrl: './dialog-add-broker.component.html',
  styleUrls: ['./dialog-add-broker.component.scss']
})
export class DialogAddBrokerComponent implements OnInit {

  broker: Broker = new Broker();
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddBrokerComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser(){
    console.log('current broker', this.broker)
    this.loading = true;
    this.firestore
    .collection('broker')
    .add(this.broker.toJSON())
    .then((result: any) => {
      console.log('Adding broker finished', result);
      this.loading = false;
      this.dialogRef.close();
    });
  }
}
