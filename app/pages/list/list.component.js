"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var router_2 = require("nativescript-angular/router");
var add_event_component_1 = require("../add-event/add-event.component");
var event_list_service_1 = require("../../shared/event-list/event-list.service");
var app_state_service_1 = require("../../shared/app-state/app-state.service");
var ListComponent = (function () {
    function ListComponent(router, modalService, viewContainerRef, routerExtensions, appStateService, pageRoute, eventListService) {
        this.router = router;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.routerExtensions = routerExtensions;
        this.appStateService = appStateService;
        this.pageRoute = pageRoute;
        this.eventListService = eventListService;
        this.currentId = 1;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.eventList.push({ name: "Apples" });
        // this.eventList.push({ name: "Bananas" });
        // this.eventList.push({ name: "Oranges" });
        // this.eventList = [{eventTitle: 'my event', eventNote: 'some text about the event', eventType: 'type', id: 10}]
        // this.eventList = this.eventListService.getEvents()
        this.eventListService.all().then(function (events) {
            console.dump(events);
            _this.eventList = events;
        }, function (error) {
            console.log("ListComponent: Error - " + error);
        });
    };
    ListComponent.prototype.addEvent = function () {
        var _this = this;
        console.log('addEvent() running');
        var options = {
            viewContainerRef: this.viewContainerRef
        };
        this.modalService.showModal(add_event_component_1.AddEventComponent, options).then(function (event) {
            // {eventTitle: this.eventTitle, eventNote: this.eventNote, eventType: this.eventType}
            console.dump(event);
            _this.eventListService.addEvent(event, _this.eventList)
                .then(function (events) {
                _this.eventList = events;
            });
        });
    };
    ListComponent.prototype.itemTapped = function (args) {
        console.dump(args.index);
        console.dump(this.eventList.getItem(args.index));
        // console.dump(this.eventList[args.index])
        console.log('navigate to sign-up page for this item');
        this.back(this.eventList.getItem(args.index));
    };
    ListComponent.prototype.logout = function () {
        this.appStateService.setLoginFalse();
        this.routerExtensions.navigate(["sign-up"], { clearHistory: true });
    };
    ListComponent.prototype.back = function (item) {
        this.routerExtensions.navigate(["sign-up", item.id]);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        template: "\n    <StackLayout>\n      <StackLayout orientation=\"horizontal\">\n        <Button text=\"Add Event\" (tap)=\"addEvent()\" ></Button>\n        <Button text=\"Logout\" (tap)=\"logout()\" ></Button>\n      </StackLayout>\n      <GridLayout>\n        <ListView [items]=\"eventList\" class=\"small-spacing\" (itemTap)=\"itemTapped($event)\">\n          <template let-item=\"item\">\n            <StackLayout orientation=\"horizontal\" >\n              <Label [text]=\"item.eventTitle\" class=\"small-spacing\" style=\"width: 100\"></Label>\n              <Label [text]=\"item.eventNote\" class=\"small-spacing\" style=\"width: 100\"></Label>\n              <Label [text]=\"item.eventType\" class=\"small-spacing\" style=\"width: 100\"></Label>\n            </StackLayout>\n          </template>\n        </ListView>\n      </GridLayout>\n    </StackLayout>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef,
        router_2.RouterExtensions,
        app_state_service_1.AppStateService,
        router_2.PageRoute,
        event_list_service_1.EventListService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJGO0FBQzNGLDBDQUF3QztBQUV4QyxrRUFBMEY7QUFFMUYsc0RBQXlFO0FBRXpFLHdFQUFvRTtBQUNwRSxpRkFBNkU7QUFDN0UsOEVBQTBFO0FBeUIxRSxJQUFhLGFBQWE7SUFNeEIsdUJBQW9CLE1BQWMsRUFDZCxZQUFnQyxFQUNoQyxnQkFBa0MsRUFDbEMsZ0JBQWtDLEVBQ2xDLGVBQWdDLEVBQ2hDLFNBQW9CLEVBQ3BCLGdCQUFrQztRQU5sQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBVHRELGNBQVMsR0FBVyxDQUFDLENBQUE7SUFTbUMsQ0FBQztJQUV6RCxnQ0FBUSxHQUFSO1FBQUEsaUJBZ0JDO1FBZkMsMkNBQTJDO1FBQzNDLDRDQUE0QztRQUM1Qyw0Q0FBNEM7UUFDNUMsaUhBQWlIO1FBQ2pILHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUM5QixVQUFBLE1BQU07WUFDSixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3BCLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFBO1FBQ3pCLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUEwQixLQUFPLENBQUMsQ0FBQTtRQUNoRCxDQUFDLENBQ0YsQ0FBQTtJQUVILENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFkQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDakMsSUFBSSxPQUFPLEdBQXdCO1lBQ2pDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDeEMsQ0FBQTtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHVDQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDMUQsVUFBQyxLQUFVO1lBQ1Qsc0ZBQXNGO1lBQ3RGLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbkIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQztpQkFDbEQsSUFBSSxDQUFFLFVBQUEsTUFBTTtnQkFDWCxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQTtZQUN6QixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUdELGtDQUFVLEdBQVYsVUFBVyxJQUFJO1FBRWIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtRQUNoRCwyQ0FBMkM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFBO1FBR3JELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFFL0MsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssSUFBSTtRQUNQLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDdEQsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXRFRCxJQXNFQztBQXRFWSxhQUFhO0lBdEJ6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFLDQxQkFrQlQ7S0FDRixDQUFDO3FDQU80QixlQUFNO1FBQ0EsaUNBQWtCO1FBQ2QsdUJBQWdCO1FBQ2hCLHlCQUFnQjtRQUNqQixtQ0FBZTtRQUNyQixrQkFBUztRQUNGLHFDQUFnQjtHQVozQyxhQUFhLENBc0V6QjtBQXRFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIlxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCJcbmltcG9ydCBvYnNlcnZhYmxlQXJyYXkgPSByZXF1aXJlKCdkYXRhL29ic2VydmFibGUtYXJyYXknKVxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiXG5cbmltcG9ydCB7IEFkZEV2ZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLWV2ZW50L2FkZC1ldmVudC5jb21wb25lbnQnXG5pbXBvcnQgeyBFdmVudExpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5zZXJ2aWNlJ1xuaW1wb3J0IHsgQXBwU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc2VydmljZSdcbmltcG9ydCB7IEV2ZW50SXRlbSB9IGZyb20gJy4uLy4uL3NoYXJlZC9ldmVudC1pdGVtL2V2ZW50LWl0ZW0nXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPFN0YWNrTGF5b3V0PlxuICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICA8QnV0dG9uIHRleHQ9XCJBZGQgRXZlbnRcIiAodGFwKT1cImFkZEV2ZW50KClcIiA+PC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdGV4dD1cIkxvZ291dFwiICh0YXApPVwibG9nb3V0KClcIiA+PC9CdXR0b24+XG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPEdyaWRMYXlvdXQ+XG4gICAgICAgIDxMaXN0VmlldyBbaXRlbXNdPVwiZXZlbnRMaXN0XCIgY2xhc3M9XCJzbWFsbC1zcGFjaW5nXCIgKGl0ZW1UYXApPVwiaXRlbVRhcHBlZCgkZXZlbnQpXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiID5cbiAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cIml0ZW0uZXZlbnRUaXRsZVwiIGNsYXNzPVwic21hbGwtc3BhY2luZ1wiIHN0eWxlPVwid2lkdGg6IDEwMFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XCJpdGVtLmV2ZW50Tm90ZVwiIGNsYXNzPVwic21hbGwtc3BhY2luZ1wiIHN0eWxlPVwid2lkdGg6IDEwMFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XCJpdGVtLmV2ZW50VHlwZVwiIGNsYXNzPVwic21hbGwtc3BhY2luZ1wiIHN0eWxlPVwid2lkdGg6IDEwMFwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgPC9TdGFja0xheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZXZlbnRMaXN0OiBvYnNlcnZhYmxlQXJyYXkuT2JzZXJ2YWJsZUFycmF5PEV2ZW50SXRlbT5cbiAgYWRkUmVzdWx0OiBhbnlcbiAgY3VycmVudElkOiBudW1iZXIgPSAxXG4gIFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxuICAgICAgICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLCBcbiAgICAgICAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhcHBTdGF0ZVNlcnZpY2U6IEFwcFN0YXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBldmVudExpc3RTZXJ2aWNlOiBFdmVudExpc3RTZXJ2aWNlKXt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy5ldmVudExpc3QucHVzaCh7IG5hbWU6IFwiQXBwbGVzXCIgfSk7XG4gICAgLy8gdGhpcy5ldmVudExpc3QucHVzaCh7IG5hbWU6IFwiQmFuYW5hc1wiIH0pO1xuICAgIC8vIHRoaXMuZXZlbnRMaXN0LnB1c2goeyBuYW1lOiBcIk9yYW5nZXNcIiB9KTtcbiAgICAvLyB0aGlzLmV2ZW50TGlzdCA9IFt7ZXZlbnRUaXRsZTogJ215IGV2ZW50JywgZXZlbnROb3RlOiAnc29tZSB0ZXh0IGFib3V0IHRoZSBldmVudCcsIGV2ZW50VHlwZTogJ3R5cGUnLCBpZDogMTB9XVxuICAgIC8vIHRoaXMuZXZlbnRMaXN0ID0gdGhpcy5ldmVudExpc3RTZXJ2aWNlLmdldEV2ZW50cygpXG4gICAgdGhpcy5ldmVudExpc3RTZXJ2aWNlLmFsbCgpLnRoZW4oXG4gICAgICBldmVudHMgPT4ge1xuICAgICAgICBjb25zb2xlLmR1bXAoZXZlbnRzKVxuICAgICAgICB0aGlzLmV2ZW50TGlzdCA9IGV2ZW50c1xuICAgICAgfSxcbiAgICAgIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYExpc3RDb21wb25lbnQ6IEVycm9yIC0gJHtlcnJvcn1gKVxuICAgICAgfVxuICAgIClcblxuICB9XG5cbiAgYWRkRXZlbnQoKSB7XG4gICAgY29uc29sZS5sb2coJ2FkZEV2ZW50KCkgcnVubmluZycpXG4gICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9ICB7XG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZpZXdDb250YWluZXJSZWZcbiAgICB9XG5cbiAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoQWRkRXZlbnRDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oXG4gICAgICAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAvLyB7ZXZlbnRUaXRsZTogdGhpcy5ldmVudFRpdGxlLCBldmVudE5vdGU6IHRoaXMuZXZlbnROb3RlLCBldmVudFR5cGU6IHRoaXMuZXZlbnRUeXBlfVxuICAgICAgICBjb25zb2xlLmR1bXAoZXZlbnQpXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0U2VydmljZS5hZGRFdmVudChldmVudCwgdGhpcy5ldmVudExpc3QpXG4gICAgICAgICAgLnRoZW4oIGV2ZW50cyA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdCA9IGV2ZW50c1xuICAgICAgICAgIH0pXG4gICAgICB9KVxuICB9XG5cblxuICBpdGVtVGFwcGVkKGFyZ3Mpe1xuICAgIFxuICAgIGNvbnNvbGUuZHVtcChhcmdzLmluZGV4KVxuICAgIGNvbnNvbGUuZHVtcCh0aGlzLmV2ZW50TGlzdC5nZXRJdGVtKGFyZ3MuaW5kZXgpKVxuICAgIC8vIGNvbnNvbGUuZHVtcCh0aGlzLmV2ZW50TGlzdFthcmdzLmluZGV4XSlcbiAgICBjb25zb2xlLmxvZygnbmF2aWdhdGUgdG8gc2lnbi11cCBwYWdlIGZvciB0aGlzIGl0ZW0nKVxuICAgIFxuICAgIFxuICAgIHRoaXMuYmFjayh0aGlzLmV2ZW50TGlzdC5nZXRJdGVtKGFyZ3MuaW5kZXgpKVxuXG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy5hcHBTdGF0ZVNlcnZpY2Uuc2V0TG9naW5GYWxzZSgpXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInNpZ24tdXBcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pXG4gIH1cblxuICBiYWNrKGl0ZW0pIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic2lnbi11cFwiLCBpdGVtLmlkXSlcbiAgfVxufSJdfQ==