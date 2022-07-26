import { Component, OnInit } from '@angular/core';
import { Broker } from 'src/models/broker.class';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Depo } from 'src/models/depo.class';
import { SelectedDepoService } from '../selected-depo.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dialog-add-depo-to-broker',
  templateUrl: './dialog-add-depo-to-broker.component.html',
  styleUrls: ['./dialog-add-depo-to-broker.component.scss'],

})
export class DialogAddDepoToBrokerComponent implements OnInit {

  depo: Depo[];
  loading = false;
  broker: Broker;
  allBroker = [];
  allDepos = {};
  selectedDepo;



  constructor(public dialogRef: MatDialogRef<DialogAddDepoToBrokerComponent>, private firestore: AngularFirestore, private selection: SelectedDepoService) {

   }

  ngOnInit(): void {
    this.getSelectedDepo();
    console.log(this.selectedDepo);
    this.firestore
    .collection('depo')
    .valueChanges({idField: 'customIdName'})
    .subscribe((changes) => {
      console.log('Received changes from Database for Depo', changes)
      this.allDepos = changes;
    });
    this.firestore
    .collection('broker')
    .valueChanges({idField: 'customIdNameBroker'})
    .subscribe((changes) => {
      console.log('Received changes from Database for Broker', changes)
      this.allBroker = changes;
    });

  }

  getSelectedDepo():void {
    this.selection.getSelectedDepo()
    .subscribe(selectedDepo => this.selectedDepo = selectedDepo);
  }

  saveUser(){

    console.log('broker', this.broker);
    this.depo = this.allDepos[this.selectedDepo];

    this.loading = true;
    //this.firestore
    //.collection('broker')
    //.doc(this.allBroker.customIdNameBroker)
    //.add(this.depo)
    //.then((result: any) => {
    //  console.log('Adding broker finished', result);
    //  this.loading = false;
    //  this.dialogRef.close();
    //});
  }

}
