import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Broker } from 'src/models/broker.class';
import { DialogAddBrokerComponent } from '../dialog-add-broker/dialog-add-broker.component';


@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss']
})
export class BrokerComponent implements OnInit {

  broker: Broker = new Broker();
  allBroker = [];

  constructor( public dialog: MatDialog, private firestore: AngularFirestore ) {

  }

  ngOnInit(): void {
    this.firestore
    .collection('broker')
    .valueChanges({idField: 'customIdName'})
    .subscribe((changes) => {
      console.log('Received changes from Database', changes)
      this.allBroker = changes;
    });
  }

  openDialogBroker(){
    this.dialog.open(DialogAddBrokerComponent)
  }

}
