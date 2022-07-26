import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Broker } from 'src/models/broker.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAdressComponent } from '../dialog-edit-address/dialog-edit-adress.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  userId = '';
  broker: any = [];

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id');
      this.getUser();
    });
  }

  getUser() {
    this.firestore
      .collection('broker')
      .doc(this.userId) // doc = zugriff auf die einzellne ID
      .valueChanges()
      .subscribe((broker: any) => {
        this.broker = new Broker(broker);
      });
  }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.broker = new Broker(this.broker.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAdressComponent);
    dialog.componentInstance.broker = new Broker(this.broker.toJSON());
    dialog.componentInstance.userId = this.userId;
  }
}
