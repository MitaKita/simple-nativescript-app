import { Component } from "@angular/core"
import { Router } from "@angular/router"

import { EventListService } from "./../../shared/event-list/event-list.service"



@Component({
  selector: "add-event",
  providers: [EventListService],
  template: `
    <StackLayout>
      <TextField hint="Event Title" [(ngModel)]="eventTitle"></TextField>
      <TextField hint="Event Note" [(ngModel)]="eventNote"></TextField>
      <TextField hint="Type" [(ngModel)]="eventType"></TextField>
      <Button text="Create" (tap)="create()"></Button>
    </StackLayout>
  `
})
export class AddEventComponent {

  eventTitle: string
  eventNote: string
  eventType: string
  
  constructor(private router: Router, private eventListService: EventListService){}

  create() {

    let text = `title = ${this.eventType}, note = ${this.eventNote}, type = ${this.eventType}`

    alert(text)

    this.eventListService.addEvent({eventTitle: this.eventType, eventNote: this.eventNote, eventType: this.eventType})

    // this.router.navigate(['sign-up'])
  }
}