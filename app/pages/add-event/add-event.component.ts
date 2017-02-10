import { Component } from "@angular/core"
import { ModalDialogParams } from "nativescript-angular/modal-dialog"
import { Router } from "@angular/router"

// import { EventListService } from "./../../shared/event-list/event-list.service"
import { EventItem } from "./../../shared/event-item/event-item"

@Component({
  selector: "add-event",
  template: `
    <StackLayout style="padding: 25">
      <TextField hint="Event Title" [(ngModel)]="eventTitle" style="width: 200"></TextField>
      <TextField hint="Event Note" [(ngModel)]="eventNote" style="width: 200"></TextField>
      <TextField hint="Type" [(ngModel)]="eventType" style="width: 200"></TextField>
      <Button text="Create" (tap)="create()" style="width: 100; margin-top: 20"></Button>
    </StackLayout>
  `
})
export class AddEventComponent {

  eventTitle: string
  eventNote: string
  eventType: string
  
  constructor(private router: Router, private params: ModalDialogParams){}

  create() {

    let text = `title = ${this.eventType}, note = ${this.eventNote}, type = ${this.eventType}`

    console.log(text)

    // this.params.closeCallback("test")
    this.params.closeCallback(new EventItem(this.eventTitle, this.eventNote, this.eventType, new Date()))

    // this.router.navigate(['sign-up'])
  }
}