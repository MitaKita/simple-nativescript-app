"use strict";
var core_1 = require("@angular/core");
var app_state_service_1 = require("./shared/app-state/app-state.service");
var event_list_service_1 = require("./shared/event-list/event-list.service");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.openLogin = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "main",
        template: "<page-router-outlet></page-router-outlet>",
        providers: [app_state_service_1.AppStateService, event_list_service_1.EventListService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUV6QywwRUFBc0U7QUFDdEUsNkVBQXlFO0FBU3pFLElBQWEsWUFBWTtJQUF6QjtJQUlBLENBQUM7SUFIQyxnQ0FBUyxHQUFUO0lBRUEsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxZQUFZO0lBUHhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUVoQixRQUFRLEVBQUUsMkNBQTJDO1FBQ3JELFNBQVMsRUFBRSxDQUFDLG1DQUFlLEVBQUUscUNBQWdCLENBQUM7S0FFL0MsQ0FBQztHQUNXLFlBQVksQ0FJeEI7QUFKWSxvQ0FBWTtBQU96QiwrREFBK0Q7QUFDL0QsMkNBQTJDO0FBQzNDLDBFQUEwRTtBQUMxRSxvRUFBb0U7QUFFcEUsbURBQW1EO0FBQ25ELDBFQUEwRTtBQUUxRSxlQUFlO0FBQ2YsaUNBQWlDO0FBQ2pDLHVDQUF1QztBQUN2QyxrQkFBa0I7QUFDbEIsNENBQTRDO0FBQzVDLHlFQUF5RTtBQUN6RSwwQ0FBMEM7QUFDMUMsUUFBUTtBQUNSLEtBQUs7QUFDTCx5QkFBeUI7QUFFekIsNkJBQTZCO0FBQzdCLHNCQUFzQjtBQUN0QiwyREFBMkQ7QUFDM0QsNkVBQTZFO0FBQzdFLFVBQVU7QUFDVixrRUFBa0U7QUFDbEUsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuaW1wb3J0IHsgQXBwU3RhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc2VydmljZVwiXG5pbXBvcnQgeyBFdmVudExpc3RTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5zZXJ2aWNlXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1haW5cIixcblxuICB0ZW1wbGF0ZTogYDxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+YCxcbiAgcHJvdmlkZXJzOiBbQXBwU3RhdGVTZXJ2aWNlLCBFdmVudExpc3RTZXJ2aWNlXVxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIG9wZW5Mb2dpbigpIHtcbiAgICBcbiAgfVxufVxuXG5cbi8vIGltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuLy8gaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIGltcG9ydCB7cHJvdmlkZVJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4gXG4vLyBpbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9ob21lJztcbi8vIGltcG9ydCB7UHJvZHVjdERldGFpbENvbXBvbmVudFBhcmFtfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZHVjdC1wYXJhbSc7XG4gXG4vLyBAQ29tcG9uZW50KHtcbi8vICAgICBzZWxlY3RvcjogJ2Jhc2ljLXJvdXRpbmcnLFxuLy8gICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4vLyAgICAgdGVtcGxhdGU6IGBcbi8vICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLyddXCI+SG9tZTwvYT5cbi8vICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycuL3Byb2R1Y3QnLCAxMjM0XVwiPlByb2R1Y3QgRGV0YWlsczwvYT4gLy8gMVxuLy8gICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4vLyAgICAgYFxuLy8gfSlcbi8vIGNsYXNzIFJvb3RDb21wb25lbnQge31cbiBcbi8vIGJvb3RzdHJhcChSb290Q29tcG9uZW50LCBbXG4vLyAgICAgcHJvdmlkZVJvdXRlcihbXG4vLyAgICAgICAgIHtwYXRoOiAnJywgICAgICAgICAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9LFxuLy8gICAgICAgICB7cGF0aDogJ3Byb2R1Y3QvOmlkJywgY29tcG9uZW50OiBQcm9kdWN0RGV0YWlsQ29tcG9uZW50UGFyYW19IC8vIDJcbi8vICAgICBdKSxcbi8vICAgICB7cHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fVxuLy8gXSk7Il19