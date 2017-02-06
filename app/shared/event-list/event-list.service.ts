import { Injectable, OnInit } from "@angular/core"
import { Observable } from "rxjs/Rx"

import { Event } from "../event/event"

@Injectable()
export class EventListService implements OnInit {

  // private listeners = []

  //Event = {eventTitle: string, eventNote: string, eventType: string, eventDate: Date }
  private events = [
    {eventTitle: 'event title 1', eventNote: 'event note', eventType: 'event type', eventDate: new Date()},
    {eventTitle: 'event title 2', eventNote: 'event note', eventType: 'event type', eventDate: new Date()},
    {eventTitle: 'event title 3', eventNote: 'event note', eventType: 'event type', eventDate: new Date()},
  ]

  ngOnInit() {
    
  }

  updateEvents() {
    // make http request
  }

  getEvents(listener) {
    return this.events
  }

  getEventsObservable() {

    return new Observable(observer => {

    })
  }

  addEvent(event){
    
    // if online, make http post request to create new item in the list
    if (event) {
      this.events.push[event]
    }
  }
}