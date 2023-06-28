import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import {canActivate} from "./enigma.guard";


describe('enigmaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => canActivate(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
