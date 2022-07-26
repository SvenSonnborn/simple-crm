import { Component, OnInit, Input  } from '@angular/core';
import { Broker } from 'src/models/broker.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Depo } from 'src/models/depo.class';
import { SelectedDepoService } from '../selected-depo.service';


@Component({
  selector: 'app-dialog-add-depo-to-broker',
  templateUrl: './dialog-add-depo-to-broker.component.html',
  styleUrls: ['./dialog-add-depo-to-broker.component.scss'],

})
export class DialogAddDepoToBrokerComponent implements OnInit {

  depo: Depo[];
  loading = false;
  broker: Broker[];
  allBroker = [];
  allDepos = {};
  selectedDepo;



  constructor(public dialogRef: MatDialogRef<DialogAddDepoToBrokerComponent>, private firestore: AngularFirestore, private selection: SelectedDepoService) { }

  getSelectedDepo():void {
    this.selection.getSelectedDepo()
    .subscribe(selectedDepo => this.selectedDepo = selectedDepo);
  }

  ngOnInit(): void {
    this.getSelectedDepo();
    console.log(this.selectedDepo);
    this.firestore
    .collection('depo')
    .valueChanges()
    .subscribe((changes) => {
      console.log('Received changes from Database for Depo', changes)
      this.allDepos = changes;
    });
    this.firestore
    .collection('broker')
    .valueChanges()
    .subscribe((changes) => {
      console.log('Received changes from Database for Broker', changes)
      this.allBroker = changes;
    });


  }

  saveUser(){
    console.log('current depo', this.depo);

    this.loading = true;
    this.firestore
    .collection('depo')
    //.add(this.depo.toJSON())
    //.then((result: any) => {
    //  console.log('Adding broker finished', result);
    //  this.loading = false;
    //  this.dialogRef.close();
    //});
  }
}
