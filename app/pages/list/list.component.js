"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ListComponent = (function () {
    function ListComponent(router) {
        this.router = router;
        this.eventList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        // this.eventList.push({ name: "Apples" });
        // this.eventList.push({ name: "Bananas" });
        // this.eventList.push({ name: "Oranges" });
    };
    ListComponent.prototype.addEvent = function () {
        this.router.navigate(["add-event"]);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        template: "\n    <StackLayout>\n      <Button text=\"Add Event\" (tap)=\"addEvent()\" ></Button>\n      <GridLayout>\n        <ListView [items]=\"eventList\" class=\"small-spacing\">\n          <template let-item=\"item\">\n            <Label [text]=\"item.name\" class=\"medium-spacing\"></Label>\n          </template>\n        </ListView>\n      </GridLayout>\n    </StackLayout>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF3QztBQW9CeEMsSUFBYSxhQUFhO0lBSXhCLHVCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUhsQyxjQUFTLEdBQWtCLEVBQUUsQ0FBQTtJQUdPLENBQUM7SUFFckMsZ0NBQVEsR0FBUjtRQUNFLDJDQUEyQztRQUMzQyw0Q0FBNEM7UUFDNUMsNENBQTRDO0lBQzlDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksYUFBYTtJQWZ6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFLHlYQVdUO0tBQ0YsQ0FBQztxQ0FLNEIsZUFBTTtHQUp2QixhQUFhLENBZXpCO0FBZlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIlxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCJcblxuaW1wb3J0IHsgRXZlbnRMaXN0U2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9ldmVudC1saXN0L2V2ZW50LWxpc3Quc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICA8QnV0dG9uIHRleHQ9XCJBZGQgRXZlbnRcIiAodGFwKT1cImFkZEV2ZW50KClcIiA+PC9CdXR0b24+XG4gICAgICA8R3JpZExheW91dD5cbiAgICAgICAgPExpc3RWaWV3IFtpdGVtc109XCJldmVudExpc3RcIiBjbGFzcz1cInNtYWxsLXNwYWNpbmdcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgbGV0LWl0ZW09XCJpdGVtXCI+XG4gICAgICAgICAgICA8TGFiZWwgW3RleHRdPVwiaXRlbS5uYW1lXCIgY2xhc3M9XCJtZWRpdW0tc3BhY2luZ1wiPjwvTGFiZWw+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgIDwvR3JpZExheW91dD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBldmVudExpc3Q6IEFycmF5PE9iamVjdD4gPSBbXVxuICBcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKXt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy5ldmVudExpc3QucHVzaCh7IG5hbWU6IFwiQXBwbGVzXCIgfSk7XG4gICAgLy8gdGhpcy5ldmVudExpc3QucHVzaCh7IG5hbWU6IFwiQmFuYW5hc1wiIH0pO1xuICAgIC8vIHRoaXMuZXZlbnRMaXN0LnB1c2goeyBuYW1lOiBcIk9yYW5nZXNcIiB9KTtcbiAgfVxuXG4gIGFkZEV2ZW50KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFkZC1ldmVudFwiXSlcbiAgfVxufSJdfQ==