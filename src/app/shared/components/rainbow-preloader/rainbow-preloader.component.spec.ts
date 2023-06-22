import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowPreloaderComponent } from './rainbow-preloader.component';

describe('RainbowPreloaderComponent', () => {
  let component: RainbowPreloaderComponent;
  let fixture: ComponentFixture<RainbowPreloaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RainbowPreloaderComponent]
    });
    fixture = TestBed.createComponent(RainbowPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
