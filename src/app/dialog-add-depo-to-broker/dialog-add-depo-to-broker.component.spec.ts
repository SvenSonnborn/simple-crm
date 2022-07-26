import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddDepoToBrokerComponent } from './dialog-add-depo-to-broker.component';

describe('DialogAddDepoToBrokerComponent', () => {
  let component: DialogAddDepoToBrokerComponent;
  let fixture: ComponentFixture<DialogAddDepoToBrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddDepoToBrokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddDepoToBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
