/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EpioneComponent } from './epione.component';

describe('EpioneComponent', () => {
  let component: EpioneComponent;
  let fixture: ComponentFixture<EpioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
