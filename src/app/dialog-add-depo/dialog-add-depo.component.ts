import { Component, OnInit } from '@angular/core';
import { Broker } from 'src/models/broker.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Depo } from 'src/models/depo.class';

@Component({
  selector: 'app-dialog-add-depo',
  templateUrl: './dialog-add-depo.component.html',
  styleUrls: ['./dialog-add-depo.component.scss']
})
export class DialogAddDepoComponent implements OnInit {

  depo: Depo = new Depo();
  loading = false;
  broker: Broker[];

  constructor(public dialogRef: MatDialogRef<DialogAddDepoComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser(){
    console.log('current broker', this.depo)
    this.loading = true;
    this.firestore
    .collection('depo')
    .add(this.depo.toJSON())
    .then((result: any) => {
      console.log('Adding broker finished', result);
      this.loading = false;
      this.dialogRef.close();
    });
  }
}
