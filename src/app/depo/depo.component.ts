import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Depo } from 'src/models/depo.class';
import { DialogAddDepoToBrokerComponent } from '../dialog-add-depo-to-broker/dialog-add-depo-to-broker.component';
import { DialogAddDepoComponent } from '../dialog-add-depo/dialog-add-depo.component';
import { LoadFirestoreService } from '../load-firestore.service';
import { SelectedDepoService } from '../selected-depo.service';

@Component({
  selector: 'app-depo',
  templateUrl: './depo.component.html',
  styleUrls: ['./depo.component.scss'],
})

export class DepoComponent implements OnInit {

  depo: Depo = new Depo();
  allDepos = [];
  selectedDepo: number;

  constructor( public dialog: MatDialog, private firestore: AngularFirestore, public selection: SelectedDepoService, private data: LoadFirestoreService ) {

  }

  ngOnInit(): void {
    this.firestore
    .collection('depo')
    .valueChanges({idField: 'customIdName'})
    .subscribe((changes) => {
      console.log('Received changes from Database', changes)
      this.allDepos = changes;
    });
  }

  openDialogDepo(){
    this.dialog.open(DialogAddDepoComponent)
  }

  openDialogDepoBroker(selectedDepo){
    this.selection.setSelectedDepo(selectedDepo);
    this.dialog.open(DialogAddDepoToBrokerComponent, selectedDepo)
    console.log('depo selected; ', selectedDepo)
  }

}
