import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmaComponent } from './enigma.component';

describe('EnigmaComponent', () => {
  let component: EnigmaComponent;
  let fixture: ComponentFixture<EnigmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnigmaComponent]
    });
    fixture = TestBed.createComponent(EnigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
