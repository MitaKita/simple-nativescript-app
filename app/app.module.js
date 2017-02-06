"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var list_component_1 = require("./pages/list/list.component");
var login_component_1 = require("./pages/login/login.component");
var sign_up_component_1 = require("./pages/sign-up/sign-up.component");
var add_event_component_1 = require("./pages/add-event/add-event.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.NativeScriptFormsModule,
            platform_1.NativeScriptModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
        ],
        declarations: [
            app_component_1.AppComponent,
            sign_up_component_1.SignUpComponent,
            login_component_1.LoginComponent,
            list_component_1.ListComponent,
            add_event_component_1.AddEventComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QyxvREFBb0U7QUFDcEUsMERBQW1FO0FBQ25FLHNEQUFzRTtBQUV0RSxpREFBK0M7QUFDL0MsOERBQTJEO0FBQzNELGlFQUE4RDtBQUM5RCx1RUFBbUU7QUFDbkUsNkVBQXlFO0FBQ3pFLDZDQUE2RDtBQWtCN0QsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBaEJyQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCwrQkFBdUI7WUFDdkIsNkJBQWtCO1lBQ2xCLGlDQUF3QjtZQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQztTQUN6QztRQUNELFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osbUNBQWU7WUFDZixnQ0FBYztZQUNkLDhCQUFhO1lBQ2IsdUNBQWlCO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcidcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnRcIlxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIlxuaW1wb3J0IHsgU2lnblVwQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBBZGRFdmVudENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2FkZC1ldmVudC9hZGQtZXZlbnQuY29tcG9uZW50XCJcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSAnLi9hcHAucm91dGluZydcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgU2lnblVwQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIExpc3RDb21wb25lbnQsXG4gICAgQWRkRXZlbnRDb21wb25lbnRcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==