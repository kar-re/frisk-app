import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aktivitet404Component } from './aktivitet404.component';

describe('Aktivitet404Component', () => {
  let component: Aktivitet404Component;
  let fixture: ComponentFixture<Aktivitet404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aktivitet404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aktivitet404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
