import {
  ActivatedRouteSnapshot, CanActivateChildFn,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import {EnigmaService} from "../services/enigma.service";
import {inject} from "@angular/core";

export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
  const enigmaService = inject(EnigmaService);
  console.log(route.routeConfig?.path)
  const questionIndex = parseInt(route.routeConfig?.path || '', 10)

  return enigmaService.verifyAnswer(questionIndex)
}

export const canActivateChild: CanActivateChildFn = (
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => canActivate(childRoute, state);

