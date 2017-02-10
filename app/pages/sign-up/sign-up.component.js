"use strict";
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var app_state_service_1 = require("./../../shared/app-state/app-state.service");
var SignUpComponent = (function () {
    function SignUpComponent(routerExtensions, appStateService, pageRoute) {
        this.routerExtensions = routerExtensions;
        this.appStateService = appStateService;
        this.pageRoute = pageRoute;
        console.log('sign-up.component constructor');
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            // this.currentEvent = params['event']
            console.log('activatedRoute params');
            console.dump(params);
        });
    }
    SignUpComponent.prototype.handleHiddenButtonTap = function () {
        console.log(this.appStateService.isUserLoggedIn());
        if (this.appStateService.isUserLoggedIn()) {
            this.navigateToList();
        }
        else {
            this.openLogin();
        }
    };
    SignUpComponent.prototype.openLogin = function () {
        var _this = this;
        console.log('openLogin()');
        // this.router.navigate(['/list'])
        dialogs.login("", "User", "Password").then(function (result) {
            console.log(result.result);
            console.log(result.userName);
            console.log(result.password);
            if (result.result) {
                if (_this.isCorrectUser(result.userName) && _this.isCorrectPassword(result.password)) {
                    _this.appStateService.setLoginTrue();
                    console.log('navigating to list');
                    // this.router.navigate(['/list'])
                    _this.navigateToList();
                }
            }
        });
    };
    SignUpComponent.prototype.isCorrectUser = function (user) {
        return user === 'User';
    };
    SignUpComponent.prototype.isCorrectPassword = function (password) {
        return password === 'Password';
    };
    SignUpComponent.prototype.navigateToList = function () {
        this.routerExtensions.navigate(['/list'], { clearHistory: true });
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        selector: "sign-up",
        template: "\n    <StackLayout>\n      <TextField hint=\"First Name\"></TextField>\n      <TextField hint=\"Last Name\"></TextField>\n      <TextField hint=\"Company (Optional)\"></TextField>\n      <TextField hint=\"Email Address\" keyboardType=\"email\"\n        autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n      <TextField hint=\"Postal Code\"></TextField>\n\n      <Button text=\"I agree\"></Button>\n      <Button text=\"Sign Up\"></Button>\n      <Button text=\"Clear\"></Button>\n      <Button text=\"Hidden button\" (tap)=\"handleHiddenButtonTap()\"></Button>\n    </StackLayout>\n  "
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, app_state_service_1.AppStateService, router_1.PageRoute])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWduLXVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLG9DQUFzQztBQUN0QyxzREFBeUU7QUFFekUsaUNBQThCO0FBQzlCLHVDQUFvQztBQUVwQyxnRkFBNEU7QUFxQjVFLElBQWEsZUFBZTtJQUkxQix5QkFBb0IsZ0JBQWtDLEVBQVUsZUFBZ0MsRUFBVSxTQUFvQjtRQUExRyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUM1SCxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQzFCLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUEsTUFBTTtZQUNiLHNDQUFzQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7WUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCwrQ0FBcUIsR0FBckI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQTtRQUNsRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDdkIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ2xCLENBQUM7SUFDSCxDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUFBLGlCQWtCQztRQWpCQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzFCLGtDQUFrQztRQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUN4QyxVQUFBLE1BQU07WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUM1QixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDakIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25GLEtBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUE7b0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtvQkFDakMsa0NBQWtDO29CQUNsQyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7Z0JBQ3ZCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUNGLENBQUE7SUFDSCxDQUFDO0lBRUQsdUNBQWEsR0FBYixVQUFjLElBQUk7UUFDaEIsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUE7SUFDeEIsQ0FBQztJQUVELDJDQUFpQixHQUFqQixVQUFrQixRQUFRO1FBQ3hCLE1BQU0sQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFBO0lBQ2hDLENBQUM7SUFFRCx3Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQztBQXZEWSxlQUFlO0lBbEIzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLDZsQkFjVDtLQUNGLENBQUM7cUNBS3NDLHlCQUFnQixFQUEyQixtQ0FBZSxFQUFxQixrQkFBUztHQUpuSCxlQUFlLENBdUQzQjtBQXZEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7IFJvdXRlciwgUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiXG5pbXBvcnQgZGlhbG9ncyA9IHJlcXVpcmUoXCJ1aS9kaWFsb2dzXCIpXG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCJcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCdcblxuaW1wb3J0IHsgQXBwU3RhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vLi4vc2hhcmVkL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc2VydmljZVwiXG5pbXBvcnQgeyBFdmVudEl0ZW0gfSBmcm9tIFwiLi8uLi8uLi9zaGFyZWQvZXZlbnQtaXRlbS9ldmVudC1pdGVtXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInNpZ24tdXBcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICA8VGV4dEZpZWxkIGhpbnQ9XCJGaXJzdCBOYW1lXCI+PC9UZXh0RmllbGQ+XG4gICAgICA8VGV4dEZpZWxkIGhpbnQ9XCJMYXN0IE5hbWVcIj48L1RleHRGaWVsZD5cbiAgICAgIDxUZXh0RmllbGQgaGludD1cIkNvbXBhbnkgKE9wdGlvbmFsKVwiPjwvVGV4dEZpZWxkPlxuICAgICAgPFRleHRGaWVsZCBoaW50PVwiRW1haWwgQWRkcmVzc1wiIGtleWJvYXJkVHlwZT1cImVtYWlsXCJcbiAgICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCI+PC9UZXh0RmllbGQ+XG4gICAgICA8VGV4dEZpZWxkIGhpbnQ9XCJQb3N0YWwgQ29kZVwiPjwvVGV4dEZpZWxkPlxuXG4gICAgICA8QnV0dG9uIHRleHQ9XCJJIGFncmVlXCI+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIHRleHQ9XCJTaWduIFVwXCI+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIHRleHQ9XCJDbGVhclwiPjwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiB0ZXh0PVwiSGlkZGVuIGJ1dHRvblwiICh0YXApPVwiaGFuZGxlSGlkZGVuQnV0dG9uVGFwKClcIj48L0J1dHRvbj5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25VcENvbXBvbmVudCAge1xuXG4gIHByaXZhdGUgY3VycmVudEV2ZW50OiBFdmVudEl0ZW1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgYXBwU3RhdGVTZXJ2aWNlOiBBcHBTdGF0ZVNlcnZpY2UsIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUpIHtcbiAgICBjb25zb2xlLmxvZygnc2lnbi11cC5jb21wb25lbnQgY29uc3RydWN0b3InKVxuICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgIC5mb3JFYWNoKHBhcmFtcyA9PiB7XG4gICAgICAgIC8vIHRoaXMuY3VycmVudEV2ZW50ID0gcGFyYW1zWydldmVudCddXG4gICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmF0ZWRSb3V0ZSBwYXJhbXMnKVxuICAgICAgICBjb25zb2xlLmR1bXAocGFyYW1zKVxuICAgICAgfSlcbiAgfVxuXG4gIGhhbmRsZUhpZGRlbkJ1dHRvblRhcCgpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwU3RhdGVTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkpXG4gICAgaWYgKHRoaXMuYXBwU3RhdGVTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkpIHtcbiAgICAgIHRoaXMubmF2aWdhdGVUb0xpc3QoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW5Mb2dpbigpXG4gICAgfVxuICB9XG5cbiAgb3BlbkxvZ2luKCkge1xuICAgIGNvbnNvbGUubG9nKCdvcGVuTG9naW4oKScpXG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbGlzdCddKVxuICAgIGRpYWxvZ3MubG9naW4oXCJcIiwgXCJVc2VyXCIsIFwiUGFzc3dvcmRcIikudGhlbihcbiAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXN1bHQpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC51c2VyTmFtZSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnBhc3N3b3JkKVxuICAgICAgICBpZihyZXN1bHQucmVzdWx0KSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNDb3JyZWN0VXNlcihyZXN1bHQudXNlck5hbWUpICYmIHRoaXMuaXNDb3JyZWN0UGFzc3dvcmQocmVzdWx0LnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVNlcnZpY2Uuc2V0TG9naW5UcnVlKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0aW5nIHRvIGxpc3QnKVxuICAgICAgICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbGlzdCddKVxuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvTGlzdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgaXNDb3JyZWN0VXNlcih1c2VyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHVzZXIgPT09ICdVc2VyJ1xuICB9XG5cbiAgaXNDb3JyZWN0UGFzc3dvcmQocGFzc3dvcmQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcGFzc3dvcmQgPT09ICdQYXNzd29yZCdcbiAgfVxuXG4gIG5hdmlnYXRlVG9MaXN0KCl7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2xpc3QnXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcbiAgfVxufSJdfQ==