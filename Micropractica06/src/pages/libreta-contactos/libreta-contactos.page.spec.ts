import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibretaContactosPage } from './libreta-contactos.page';

describe('LibretaContactosPage', () => {
  let component: LibretaContactosPage;
  let fixture: ComponentFixture<LibretaContactosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibretaContactosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibretaContactosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
