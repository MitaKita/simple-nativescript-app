"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var event_list_service_1 = require("./../../shared/event-list/event-list.service");
var AddEventComponent = (function () {
    function AddEventComponent(router, eventListService) {
        this.router = router;
        this.eventListService = eventListService;
    }
    AddEventComponent.prototype.create = function () {
        var text = "title = " + this.eventType + ", note = " + this.eventNote + ", type = " + this.eventType;
        alert(text);
        this.eventListService.addEvent({ eventTitle: this.eventType, eventNote: this.eventNote, eventType: this.eventType });
        // this.router.navigate(['sign-up'])
    };
    return AddEventComponent;
}());
AddEventComponent = __decorate([
    core_1.Component({
        selector: "add-event",
        providers: [event_list_service_1.EventListService],
        template: "\n    <StackLayout>\n      <TextField hint=\"Event Title\" [(ngModel)]=\"eventTitle\"></TextField>\n      <TextField hint=\"Event Note\" [(ngModel)]=\"eventNote\"></TextField>\n      <TextField hint=\"Type\" [(ngModel)]=\"eventType\"></TextField>\n      <Button text=\"Create\" (tap)=\"create()\"></Button>\n    </StackLayout>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router, event_list_service_1.EventListService])
], AddEventComponent);
exports.AddEventComponent = AddEventComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWV2ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC1ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QywwQ0FBd0M7QUFFeEMsbUZBQStFO0FBZ0IvRSxJQUFhLGlCQUFpQjtJQU01QiwyQkFBb0IsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFFLENBQUM7SUFFakYsa0NBQU0sR0FBTjtRQUVFLElBQUksSUFBSSxHQUFHLGFBQVcsSUFBSSxDQUFDLFNBQVMsaUJBQVksSUFBSSxDQUFDLFNBQVMsaUJBQVksSUFBSSxDQUFDLFNBQVcsQ0FBQTtRQUUxRixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFBO1FBRWxILG9DQUFvQztJQUN0QyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBbEJZLGlCQUFpQjtJQVo3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsU0FBUyxFQUFFLENBQUMscUNBQWdCLENBQUM7UUFDN0IsUUFBUSxFQUFFLDRVQU9UO0tBQ0YsQ0FBQztxQ0FPNEIsZUFBTSxFQUE0QixxQ0FBZ0I7R0FObkUsaUJBQWlCLENBa0I3QjtBQWxCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCJcblxuaW1wb3J0IHsgRXZlbnRMaXN0U2VydmljZSB9IGZyb20gXCIuLy4uLy4uL3NoYXJlZC9ldmVudC1saXN0L2V2ZW50LWxpc3Quc2VydmljZVwiXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYWRkLWV2ZW50XCIsXG4gIHByb3ZpZGVyczogW0V2ZW50TGlzdFNlcnZpY2VdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxTdGFja0xheW91dD5cbiAgICAgIDxUZXh0RmllbGQgaGludD1cIkV2ZW50IFRpdGxlXCIgWyhuZ01vZGVsKV09XCJldmVudFRpdGxlXCI+PC9UZXh0RmllbGQ+XG4gICAgICA8VGV4dEZpZWxkIGhpbnQ9XCJFdmVudCBOb3RlXCIgWyhuZ01vZGVsKV09XCJldmVudE5vdGVcIj48L1RleHRGaWVsZD5cbiAgICAgIDxUZXh0RmllbGQgaGludD1cIlR5cGVcIiBbKG5nTW9kZWwpXT1cImV2ZW50VHlwZVwiPjwvVGV4dEZpZWxkPlxuICAgICAgPEJ1dHRvbiB0ZXh0PVwiQ3JlYXRlXCIgKHRhcCk9XCJjcmVhdGUoKVwiPjwvQnV0dG9uPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQWRkRXZlbnRDb21wb25lbnQge1xuXG4gIGV2ZW50VGl0bGU6IHN0cmluZ1xuICBldmVudE5vdGU6IHN0cmluZ1xuICBldmVudFR5cGU6IHN0cmluZ1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBldmVudExpc3RTZXJ2aWNlOiBFdmVudExpc3RTZXJ2aWNlKXt9XG5cbiAgY3JlYXRlKCkge1xuXG4gICAgbGV0IHRleHQgPSBgdGl0bGUgPSAke3RoaXMuZXZlbnRUeXBlfSwgbm90ZSA9ICR7dGhpcy5ldmVudE5vdGV9LCB0eXBlID0gJHt0aGlzLmV2ZW50VHlwZX1gXG5cbiAgICBhbGVydCh0ZXh0KVxuXG4gICAgdGhpcy5ldmVudExpc3RTZXJ2aWNlLmFkZEV2ZW50KHtldmVudFRpdGxlOiB0aGlzLmV2ZW50VHlwZSwgZXZlbnROb3RlOiB0aGlzLmV2ZW50Tm90ZSwgZXZlbnRUeXBlOiB0aGlzLmV2ZW50VHlwZX0pXG5cbiAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NpZ24tdXAnXSlcbiAgfVxufSJdfQ==