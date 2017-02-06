"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SignUpComponent = (function () {
    function SignUpComponent(router) {
        this.router = router;
    }
    SignUpComponent.prototype.openLogin = function () {
        // this.router.navigate(['/login'])
        this.router.navigate(['/login']);
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        selector: "sign-up",
        template: "\n    <StackLayout>\n      <TextField hint=\"First Name\"></TextField>\n      <TextField hint=\"Last Name\"></TextField>\n      <TextField hint=\"Company (Optional)\"></TextField>\n      <TextField hint=\"Email Address\" keyboardType=\"email\"\n        autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n      <TextField hint=\"Postal Code\"></TextField>\n\n      <Button text=\"I agree\"></Button>\n      <Button text=\"Sign Up\"></Button>\n      <Button text=\"Clear\"></Button>\n      <Button text=\"Hidden button\" (tap)=\"openLogin()\"></Button>\n    </StackLayout>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWduLXVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUF3QztBQW9CeEMsSUFBYSxlQUFlO0lBRTFCLHlCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVsQyxDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUNFLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxlQUFlO0lBbEIzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLGlsQkFjVDtLQUNGLENBQUM7cUNBRzRCLGVBQU07R0FGdkIsZUFBZSxDQVUzQjtBQVZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzaWduLXVwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPFN0YWNrTGF5b3V0PlxuICAgICAgPFRleHRGaWVsZCBoaW50PVwiRmlyc3QgTmFtZVwiPjwvVGV4dEZpZWxkPlxuICAgICAgPFRleHRGaWVsZCBoaW50PVwiTGFzdCBOYW1lXCI+PC9UZXh0RmllbGQ+XG4gICAgICA8VGV4dEZpZWxkIGhpbnQ9XCJDb21wYW55IChPcHRpb25hbClcIj48L1RleHRGaWVsZD5cbiAgICAgIDxUZXh0RmllbGQgaGludD1cIkVtYWlsIEFkZHJlc3NcIiBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXG4gICAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiPjwvVGV4dEZpZWxkPlxuICAgICAgPFRleHRGaWVsZCBoaW50PVwiUG9zdGFsIENvZGVcIj48L1RleHRGaWVsZD5cblxuICAgICAgPEJ1dHRvbiB0ZXh0PVwiSSBhZ3JlZVwiPjwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiB0ZXh0PVwiU2lnbiBVcFwiPjwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiB0ZXh0PVwiQ2xlYXJcIj48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gdGV4dD1cIkhpZGRlbiBidXR0b25cIiAodGFwKT1cIm9wZW5Mb2dpbigpXCI+PC9CdXR0b24+XG4gICAgPC9TdGFja0xheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblxuICB9XG5cbiAgb3BlbkxvZ2luKCkge1xuICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSlcbiAgfVxufSJdfQ==