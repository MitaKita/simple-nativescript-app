"use strict";
var core_1 = require("@angular/core");
var event_list_helper_1 = require("./event-list-helper");
var event_item_1 = require("../event-item/event-item");
var EventListService = (function () {
    function EventListService() {
        this.isOnline = true;
        // private events: observableArrayModule.ObservableArray<EventItem>
        // private listeners = []
        //Event = {eventTitle: string, eventNote: string, eventType: string, eventDate: Date }
        this.initialItems = [
            new event_item_1.EventItem('my event', 'some text about the event', 'type', new Date())
        ];
    }
    EventListService.prototype.updateEvents = function () {
        // make http request
    };
    EventListService.prototype.all = function () {
        return Promise.resolve(this.getEvents());
    };
    EventListService.prototype.getEvents = function () {
        if (!this.eventListHelper) {
            this.eventListHelper = new event_list_helper_1.EventListHelper();
        }
        return this.eventListHelper.getEvents();
        // this.events = new observableArrayModule.ObservableArray<EventItem>(this.initialItems)
        // console.dump(this.events)
        // return this.events
    };
    EventListService.prototype.getEventsObservable = function () {
    };
    EventListService.prototype.addEvent = function (event, defaultValue) {
        console.log('addEvent');
        console.dump(event);
        // if online, make http post request to create new item in the list
        if (this.isOnline) {
            return Promise.resolve(this.eventListHelper.add(event));
        }
        return Promise.reject(defaultValue);
    };
    return EventListService;
}());
EventListService = __decorate([
    core_1.Injectable()
], EventListService);
exports.EventListService = EventListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXZlbnQtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMEM7QUFJMUMseURBQXFEO0FBQ3JELHVEQUFvRDtBQUdwRCxJQUFhLGdCQUFnQjtJQUQ3QjtRQUdVLGFBQVEsR0FBWSxJQUFJLENBQUE7UUFHaEMsbUVBQW1FO1FBQ25FLHlCQUF5QjtRQUV6QixzRkFBc0Y7UUFDOUUsaUJBQVksR0FBRztZQUNyQixJQUFJLHNCQUFTLENBQUMsVUFBVSxFQUFFLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDO1NBQzNFLENBQUE7SUFtQ0gsQ0FBQztJQWpDQyx1Q0FBWSxHQUFaO1FBQ0Usb0JBQW9CO0lBQ3RCLENBQUM7SUFFRCw4QkFBRyxHQUFIO1FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxtQ0FBZSxFQUFFLENBQUE7UUFDOUMsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ3ZDLHdGQUF3RjtRQUN4Riw0QkFBNEI7UUFDNUIscUJBQXFCO0lBQ3ZCLENBQUM7SUFFRCw4Q0FBbUIsR0FBbkI7SUFHQSxDQUFDO0lBRUQsbUNBQVEsR0FBUixVQUFTLEtBQUssRUFBRSxZQUFZO1FBRTFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNuQixtRUFBbUU7UUFDbkUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtRQUN6RCxDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQTlDRCxJQThDQztBQTlDWSxnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtHQUNBLGdCQUFnQixDQThDNUI7QUE5Q1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiXG5pbXBvcnQgb2JzZXJ2YWJsZUFycmF5TW9kdWxlID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKVxuXG5pbXBvcnQgeyBFdmVudExpc3RIZWxwZXIgfSBmcm9tIFwiLi9ldmVudC1saXN0LWhlbHBlclwiXG5pbXBvcnQgeyBFdmVudEl0ZW0gfSBmcm9tIFwiLi4vZXZlbnQtaXRlbS9ldmVudC1pdGVtXCJcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV2ZW50TGlzdFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgaXNPbmxpbmU6IGJvb2xlYW4gPSB0cnVlXG5cbiAgcHJpdmF0ZSBldmVudExpc3RIZWxwZXI6IEV2ZW50TGlzdEhlbHBlclxuICAvLyBwcml2YXRlIGV2ZW50czogb2JzZXJ2YWJsZUFycmF5TW9kdWxlLk9ic2VydmFibGVBcnJheTxFdmVudEl0ZW0+XG4gIC8vIHByaXZhdGUgbGlzdGVuZXJzID0gW11cblxuICAvL0V2ZW50ID0ge2V2ZW50VGl0bGU6IHN0cmluZywgZXZlbnROb3RlOiBzdHJpbmcsIGV2ZW50VHlwZTogc3RyaW5nLCBldmVudERhdGU6IERhdGUgfVxuICBwcml2YXRlIGluaXRpYWxJdGVtcyA9IFtcbiAgICBuZXcgRXZlbnRJdGVtKCdteSBldmVudCcsICdzb21lIHRleHQgYWJvdXQgdGhlIGV2ZW50JywgJ3R5cGUnLCBuZXcgRGF0ZSgpKVxuICBdXG5cbiAgdXBkYXRlRXZlbnRzKCkge1xuICAgIC8vIG1ha2UgaHR0cCByZXF1ZXN0XG4gIH1cblxuICBhbGwoKTogUHJvbWlzZTxvYnNlcnZhYmxlQXJyYXlNb2R1bGUuT2JzZXJ2YWJsZUFycmF5PEV2ZW50SXRlbT4+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZ2V0RXZlbnRzKCkpXG4gIH1cblxuICBnZXRFdmVudHMoKTogb2JzZXJ2YWJsZUFycmF5TW9kdWxlLk9ic2VydmFibGVBcnJheTxFdmVudEl0ZW0+IHtcbiAgICBpZiAoIXRoaXMuZXZlbnRMaXN0SGVscGVyKSB7XG4gICAgICB0aGlzLmV2ZW50TGlzdEhlbHBlciA9IG5ldyBFdmVudExpc3RIZWxwZXIoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ldmVudExpc3RIZWxwZXIuZ2V0RXZlbnRzKClcbiAgICAvLyB0aGlzLmV2ZW50cyA9IG5ldyBvYnNlcnZhYmxlQXJyYXlNb2R1bGUuT2JzZXJ2YWJsZUFycmF5PEV2ZW50SXRlbT4odGhpcy5pbml0aWFsSXRlbXMpXG4gICAgLy8gY29uc29sZS5kdW1wKHRoaXMuZXZlbnRzKVxuICAgIC8vIHJldHVybiB0aGlzLmV2ZW50c1xuICB9XG5cbiAgZ2V0RXZlbnRzT2JzZXJ2YWJsZSgpIHtcblxuICAgIFxuICB9XG5cbiAgYWRkRXZlbnQoZXZlbnQsIGRlZmF1bHRWYWx1ZSk6IFByb21pc2U8b2JzZXJ2YWJsZUFycmF5TW9kdWxlLk9ic2VydmFibGVBcnJheTxFdmVudEl0ZW0+PiB7XG4gICAgXG4gICAgY29uc29sZS5sb2coJ2FkZEV2ZW50JylcbiAgICBjb25zb2xlLmR1bXAoZXZlbnQpXG4gICAgLy8gaWYgb25saW5lLCBtYWtlIGh0dHAgcG9zdCByZXF1ZXN0IHRvIGNyZWF0ZSBuZXcgaXRlbSBpbiB0aGUgbGlzdFxuICAgIGlmICh0aGlzLmlzT25saW5lKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZXZlbnRMaXN0SGVscGVyLmFkZChldmVudCkpXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChkZWZhdWx0VmFsdWUpXG4gIH1cbn0iXX0=