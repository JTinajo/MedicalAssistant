import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerContactoPage } from './ver-contacto.page';

describe('VerContactoPage', () => {
  let component: VerContactoPage;
  let fixture: ComponentFixture<VerContactoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerContactoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
