import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddBrokerComponent } from './dialog-add-broker.component';

describe('DialogAddBrokerComponent', () => {
  let component: DialogAddBrokerComponent;
  let fixture: ComponentFixture<DialogAddBrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddBrokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
