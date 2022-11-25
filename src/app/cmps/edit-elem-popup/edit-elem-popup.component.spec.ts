import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElemPopupComponent } from './edit-elem-popup.component';

describe('EditElemPopupComponent', () => {
  let component: EditElemPopupComponent;
  let fixture: ComponentFixture<EditElemPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditElemPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditElemPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
