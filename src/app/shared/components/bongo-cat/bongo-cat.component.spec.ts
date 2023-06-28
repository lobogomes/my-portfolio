import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BongoCatComponent } from './bongo-cat.component';

describe('BongoCatComponent', () => {
  let component: BongoCatComponent;
  let fixture: ComponentFixture<BongoCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BongoCatComponent]
    });
    fixture = TestBed.createComponent(BongoCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
