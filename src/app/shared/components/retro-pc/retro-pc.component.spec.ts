import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroPcComponent } from './retro-pc.component';

describe('RetroPcComponent', () => {
  let component: RetroPcComponent;
  let fixture: ComponentFixture<RetroPcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetroPcComponent]
    });
    fixture = TestBed.createComponent(RetroPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
