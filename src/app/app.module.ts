import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrokerComponent } from './broker/broker.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddBrokerComponent } from './dialog-add-broker/dialog-add-broker.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTreeModule } from '@angular/material/tree';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatMenuModule } from '@angular/material/menu';
import { DialogEditAdressComponent } from './dialog-edit-address/dialog-edit-adress.component';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { DepoComponent } from './depo/depo.component';
import { DialogAddDepoComponent } from './dialog-add-depo/dialog-add-depo.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogAddDepoToBrokerComponent } from './dialog-add-depo-to-broker/dialog-add-depo-to-broker.component';
import { SelectedDepoService } from './selected-depo.service';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BrokerComponent,
    DialogAddBrokerComponent,
    UserDetailComponent,
    DialogEditAdressComponent,
    DialogEditUserComponent,
    DepoComponent,
    DialogAddDepoComponent,
    DialogAddDepoToBrokerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatTreeModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatProgressBarModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    ReactiveFormsModule,

  ],
  providers: [SelectedDepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
