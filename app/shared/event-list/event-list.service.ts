import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Rx"
import observableArrayModule = require("data/observable-array")

import { EventListHelper } from "./event-list-helper"
import { EventItem } from "../event-item/event-item"

@Injectable()
export class EventListService {

  private isOnline: boolean = true

  private eventListHelper: EventListHelper
  // private events: observableArrayModule.ObservableArray<EventItem>
  // private listeners = []

  //Event = {eventTitle: string, eventNote: string, eventType: string, eventDate: Date }
  private initialItems = [
    new EventItem('my event', 'some text about the event', 'type', new Date())
  ]

  updateEvents() {
    // make http request
  }

  all(): Promise<observableArrayModule.ObservableArray<EventItem>> {
    return Promise.resolve(this.getEvents())
  }

  getEvents(): observableArrayModule.ObservableArray<EventItem> {
    if (!this.eventListHelper) {
      this.eventListHelper = new EventListHelper()
    }
    return this.eventListHelper.getEvents()
    // this.events = new observableArrayModule.ObservableArray<EventItem>(this.initialItems)
    // console.dump(this.events)
    // return this.events
  }

  getEventsObservable() {

    
  }

  addEvent(event, defaultValue): Promise<observableArrayModule.ObservableArray<EventItem>> {
    
    console.log('addEvent')
    console.dump(event)
    // if online, make http post request to create new item in the list
    if (this.isOnline) {
      return Promise.resolve(this.eventListHelper.add(event))
    }
    return Promise.reject(defaultValue)
  }
}