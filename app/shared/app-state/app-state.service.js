"use strict";
var core_1 = require("@angular/core");
var AppStateService = (function () {
    function AppStateService() {
    }
    AppStateService.prototype.ngOnInit = function () {
    };
    AppStateService.prototype.setLoginTrue = function () {
        this.isLoggedIn = true;
    };
    AppStateService.prototype.setLoginFalse = function () {
        this.isLoggedIn = false;
    };
    AppStateService.prototype.isUserLoggedIn = function () {
        return this.isLoggedIn;
    };
    return AppStateService;
}());
AppStateService = __decorate([
    core_1.Injectable()
], AppStateService);
exports.AppStateService = AppStateService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBR2xELElBQWEsZUFBZTtJQUE1QjtJQWtCQSxDQUFDO0lBZEMsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFTSxzQ0FBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFBO0lBQ3hCLENBQUM7SUFFTSx1Q0FBYSxHQUFwQjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO0lBQ3pCLENBQUM7SUFFTSx3Q0FBYyxHQUFyQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQ3hCLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksZUFBZTtJQUQzQixpQkFBVSxFQUFFO0dBQ0EsZUFBZSxDQWtCM0I7QUFsQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBTdGF0ZVNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgaXNMb2dnZWRJbjogYm9vbGVhblxuICBcbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBwdWJsaWMgc2V0TG9naW5UcnVlKCkge1xuICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRydWVcbiAgfVxuXG4gIHB1YmxpYyBzZXRMb2dpbkZhbHNlKCkge1xuICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlXG4gIH1cblxuICBwdWJsaWMgaXNVc2VyTG9nZ2VkSW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNMb2dnZWRJblxuICB9XG59Il19