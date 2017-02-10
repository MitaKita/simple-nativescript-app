"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var router_1 = require("@angular/router");
// import { EventListService } from "./../../shared/event-list/event-list.service"
var event_item_1 = require("./../../shared/event-item/event-item");
var AddEventComponent = (function () {
    function AddEventComponent(router, params) {
        this.router = router;
        this.params = params;
    }
    AddEventComponent.prototype.create = function () {
        var text = "title = " + this.eventType + ", note = " + this.eventNote + ", type = " + this.eventType;
        console.log(text);
        // this.params.closeCallback("test")
        this.params.closeCallback(new event_item_1.EventItem(this.eventTitle, this.eventNote, this.eventType, new Date()));
        // this.router.navigate(['sign-up'])
    };
    return AddEventComponent;
}());
AddEventComponent = __decorate([
    core_1.Component({
        selector: "add-event",
        template: "\n    <StackLayout style=\"padding: 25\">\n      <TextField hint=\"Event Title\" [(ngModel)]=\"eventTitle\" style=\"width: 200\"></TextField>\n      <TextField hint=\"Event Note\" [(ngModel)]=\"eventNote\" style=\"width: 200\"></TextField>\n      <TextField hint=\"Type\" [(ngModel)]=\"eventType\" style=\"width: 200\"></TextField>\n      <Button text=\"Create\" (tap)=\"create()\" style=\"width: 100; margin-top: 20\"></Button>\n    </StackLayout>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router, modal_dialog_1.ModalDialogParams])
], AddEventComponent);
exports.AddEventComponent = AddEventComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWV2ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC1ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QyxrRUFBcUU7QUFDckUsMENBQXdDO0FBRXhDLGtGQUFrRjtBQUNsRixtRUFBZ0U7QUFhaEUsSUFBYSxpQkFBaUI7SUFNNUIsMkJBQW9CLE1BQWMsRUFBVSxNQUF5QjtRQUFqRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7SUFBRSxDQUFDO0lBRXhFLGtDQUFNLEdBQU47UUFFRSxJQUFJLElBQUksR0FBRyxhQUFXLElBQUksQ0FBQyxTQUFTLGlCQUFZLElBQUksQ0FBQyxTQUFTLGlCQUFZLElBQUksQ0FBQyxTQUFXLENBQUE7UUFFMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUVqQixvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxzQkFBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBRXJHLG9DQUFvQztJQUN0QyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJZLGlCQUFpQjtJQVg3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLHNjQU9UO0tBQ0YsQ0FBQztxQ0FPNEIsZUFBTSxFQUFrQixnQ0FBaUI7R0FOMUQsaUJBQWlCLENBbUI3QjtBQW5CWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIlxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiXG5cbi8vIGltcG9ydCB7IEV2ZW50TGlzdFNlcnZpY2UgfSBmcm9tIFwiLi8uLi8uLi9zaGFyZWQvZXZlbnQtbGlzdC9ldmVudC1saXN0LnNlcnZpY2VcIlxuaW1wb3J0IHsgRXZlbnRJdGVtIH0gZnJvbSBcIi4vLi4vLi4vc2hhcmVkL2V2ZW50LWl0ZW0vZXZlbnQtaXRlbVwiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhZGQtZXZlbnRcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8U3RhY2tMYXlvdXQgc3R5bGU9XCJwYWRkaW5nOiAyNVwiPlxuICAgICAgPFRleHRGaWVsZCBoaW50PVwiRXZlbnQgVGl0bGVcIiBbKG5nTW9kZWwpXT1cImV2ZW50VGl0bGVcIiBzdHlsZT1cIndpZHRoOiAyMDBcIj48L1RleHRGaWVsZD5cbiAgICAgIDxUZXh0RmllbGQgaGludD1cIkV2ZW50IE5vdGVcIiBbKG5nTW9kZWwpXT1cImV2ZW50Tm90ZVwiIHN0eWxlPVwid2lkdGg6IDIwMFwiPjwvVGV4dEZpZWxkPlxuICAgICAgPFRleHRGaWVsZCBoaW50PVwiVHlwZVwiIFsobmdNb2RlbCldPVwiZXZlbnRUeXBlXCIgc3R5bGU9XCJ3aWR0aDogMjAwXCI+PC9UZXh0RmllbGQ+XG4gICAgICA8QnV0dG9uIHRleHQ9XCJDcmVhdGVcIiAodGFwKT1cImNyZWF0ZSgpXCIgc3R5bGU9XCJ3aWR0aDogMTAwOyBtYXJnaW4tdG9wOiAyMFwiPjwvQnV0dG9uPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQWRkRXZlbnRDb21wb25lbnQge1xuXG4gIGV2ZW50VGl0bGU6IHN0cmluZ1xuICBldmVudE5vdGU6IHN0cmluZ1xuICBldmVudFR5cGU6IHN0cmluZ1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKXt9XG5cbiAgY3JlYXRlKCkge1xuXG4gICAgbGV0IHRleHQgPSBgdGl0bGUgPSAke3RoaXMuZXZlbnRUeXBlfSwgbm90ZSA9ICR7dGhpcy5ldmVudE5vdGV9LCB0eXBlID0gJHt0aGlzLmV2ZW50VHlwZX1gXG5cbiAgICBjb25zb2xlLmxvZyh0ZXh0KVxuXG4gICAgLy8gdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhcInRlc3RcIilcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKG5ldyBFdmVudEl0ZW0odGhpcy5ldmVudFRpdGxlLCB0aGlzLmV2ZW50Tm90ZSwgdGhpcy5ldmVudFR5cGUsIG5ldyBEYXRlKCkpKVxuXG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydzaWduLXVwJ10pXG4gIH1cbn0iXX0=