import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoadFirestoreService {

  allBroker = [];
  allDepos = [];

  constructor(private firestore: AngularFirestore) { }

  getDataBroker(){
    this.firestore
    .collection('broker')
    .valueChanges()
    .subscribe((changes) => {
      console.log('Received changes from Database for Broker', changes)
      this.allBroker = changes;
    });
    return this.allBroker;
  }

  getDataDepo(){
    this.firestore
    .collection('depo')
    .valueChanges()
    .subscribe((changes) => {
      console.log('Received changes from Database for Depo', changes)
      this.allDepos = changes;
    });
    return this.allDepos
  }






}
