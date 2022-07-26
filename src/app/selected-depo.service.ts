import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SelectedDepoService {

  selectedDepo;

  setSelectedDepo(selection: number) {
    this.selectedDepo = selection;
  }

  getSelectedDepo(): Observable<typeof selectedDepo> {
    let selectedDepo = of(this.selectedDepo);
    return selectedDepo;
  }

}
