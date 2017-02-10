import observableArrayModule = require("data/observable-array")

import { EventItem } from "../event-item/event-item"

export class EventListHelper {

  private events: observableArrayModule.ObservableArray<EventItem>
  private currentId: number
  
  constructor(){
    this.currentId = 1
    this.events = new observableArrayModule.ObservableArray([this.getInitialItem()])
  }

  public getEvents(): observableArrayModule.ObservableArray<EventItem> {
    return this.events
  }

  public add(event: EventItem): observableArrayModule.ObservableArray<EventItem> {
    event.setId(this.currentId++)
    this.events.push(event)
    return this.getEvents()
  }

  private getInitialItem(): EventItem {
    let item: EventItem = new EventItem('initial event', 'event note', 'type', new Date())
    item.setId(this.currentId++)
    return item
  }
}