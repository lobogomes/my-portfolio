import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('WelcomePage <=> DashPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          height: '100%',
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ right: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ right: '100%' }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ right: '0%' }))
        ]),
      ]),
    ]),
  ]);
