"use strict";
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var EventListService = (function () {
    function EventListService() {
        // private listeners = []
        //Event = {eventTitle: string, eventNote: string, eventType: string, eventDate: Date }
        this.events = [
            { eventTitle: 'event title 1', eventNote: 'event note', eventType: 'event type', eventDate: new Date() },
            { eventTitle: 'event title 2', eventNote: 'event note', eventType: 'event type', eventDate: new Date() },
            { eventTitle: 'event title 3', eventNote: 'event note', eventType: 'event type', eventDate: new Date() },
        ];
    }
    EventListService.prototype.ngOnInit = function () {
    };
    EventListService.prototype.updateEvents = function () {
        // make http request
    };
    EventListService.prototype.getEvents = function (listener) {
        return this.events;
    };
    EventListService.prototype.getEventsObservable = function () {
        return new Rx_1.Observable(function (observer) {
        });
    };
    EventListService.prototype.addEvent = function (event) {
        // if online, make http post request to create new item in the list
        if (event) {
            this.events.push[event];
        }
    };
    return EventListService;
}());
EventListService = __decorate([
    core_1.Injectable()
], EventListService);
exports.EventListService = EventListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXZlbnQtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsOEJBQW9DO0FBS3BDLElBQWEsZ0JBQWdCO0lBRDdCO1FBR0UseUJBQXlCO1FBRXpCLHNGQUFzRjtRQUM5RSxXQUFNLEdBQUc7WUFDZixFQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRSxFQUFDO1lBQ3RHLEVBQUMsVUFBVSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUM7WUFDdEcsRUFBQyxVQUFVLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBQztTQUN2RyxDQUFBO0lBNEJILENBQUM7SUExQkMsbUNBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCx1Q0FBWSxHQUFaO1FBQ0Usb0JBQW9CO0lBQ3RCLENBQUM7SUFFRCxvQ0FBUyxHQUFULFVBQVUsUUFBUTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUNwQixDQUFDO0lBRUQsOENBQW1CLEdBQW5CO1FBRUUsTUFBTSxDQUFDLElBQUksZUFBVSxDQUFDLFVBQUEsUUFBUTtRQUU5QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxtQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUVaLG1FQUFtRTtRQUNuRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDekIsQ0FBQztJQUNILENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ1ksZ0JBQWdCO0lBRDVCLGlCQUFVLEVBQUU7R0FDQSxnQkFBZ0IsQ0FxQzVCO0FBckNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiXG5cbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4uL2V2ZW50L2V2ZW50XCJcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV2ZW50TGlzdFNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIHByaXZhdGUgbGlzdGVuZXJzID0gW11cblxuICAvL0V2ZW50ID0ge2V2ZW50VGl0bGU6IHN0cmluZywgZXZlbnROb3RlOiBzdHJpbmcsIGV2ZW50VHlwZTogc3RyaW5nLCBldmVudERhdGU6IERhdGUgfVxuICBwcml2YXRlIGV2ZW50cyA9IFtcbiAgICB7ZXZlbnRUaXRsZTogJ2V2ZW50IHRpdGxlIDEnLCBldmVudE5vdGU6ICdldmVudCBub3RlJywgZXZlbnRUeXBlOiAnZXZlbnQgdHlwZScsIGV2ZW50RGF0ZTogbmV3IERhdGUoKX0sXG4gICAge2V2ZW50VGl0bGU6ICdldmVudCB0aXRsZSAyJywgZXZlbnROb3RlOiAnZXZlbnQgbm90ZScsIGV2ZW50VHlwZTogJ2V2ZW50IHR5cGUnLCBldmVudERhdGU6IG5ldyBEYXRlKCl9LFxuICAgIHtldmVudFRpdGxlOiAnZXZlbnQgdGl0bGUgMycsIGV2ZW50Tm90ZTogJ2V2ZW50IG5vdGUnLCBldmVudFR5cGU6ICdldmVudCB0eXBlJywgZXZlbnREYXRlOiBuZXcgRGF0ZSgpfSxcbiAgXVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFxuICB9XG5cbiAgdXBkYXRlRXZlbnRzKCkge1xuICAgIC8vIG1ha2UgaHR0cCByZXF1ZXN0XG4gIH1cblxuICBnZXRFdmVudHMobGlzdGVuZXIpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudHNcbiAgfVxuXG4gIGdldEV2ZW50c09ic2VydmFibGUoKSB7XG5cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50KGV2ZW50KXtcbiAgICBcbiAgICAvLyBpZiBvbmxpbmUsIG1ha2UgaHR0cCBwb3N0IHJlcXVlc3QgdG8gY3JlYXRlIG5ldyBpdGVtIGluIHRoZSBsaXN0XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB0aGlzLmV2ZW50cy5wdXNoW2V2ZW50XVxuICAgIH1cbiAgfVxufSJdfQ==