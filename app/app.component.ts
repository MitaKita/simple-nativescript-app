import { Component } from "@angular/core"

import { AppStateService } from "./shared/app-state/app-state.service"
import { EventListService } from "./shared/event-list/event-list.service"

@Component({
  selector: "main",

  template: `<page-router-outlet></page-router-outlet>`,
  providers: [AppStateService, EventListService]

})
export class AppComponent {
  openLogin() {
    
  }
}


// import {bootstrap} from '@angular/platform-browser-dynamic';
// import {Component} from '@angular/core';
// import {LocationStrategy, HashLocationStrategy} from '@angular/common';
// import {provideRouter, ROUTER_DIRECTIVES} from '@angular/router';
 
// import {HomeComponent} from './components/home';
// import {ProductDetailComponentParam} from './components/product-param';
 
// @Component({
//     selector: 'basic-routing',
//     directives: [ROUTER_DIRECTIVES],
//     template: `
//         <a [routerLink]="['./']">Home</a>
//         <a [routerLink]="['./product', 1234]">Product Details</a> // 1
//         <router-outlet></router-outlet>
//     `
// })
// class RootComponent {}
 
// bootstrap(RootComponent, [
//     provideRouter([
//         {path: '',            component: HomeComponent},
//         {path: 'product/:id', component: ProductDetailComponentParam} // 2
//     ]),
//     {provide: LocationStrategy, useClass: HashLocationStrategy}
// ]);