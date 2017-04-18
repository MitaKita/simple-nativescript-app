import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { Router } from "@angular/router"
import { Observable } from "rxjs/Rx"
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog"
import observableArray = require('data/observable-array')
import { RouterExtensions, PageRoute } from "nativescript-angular/router"

import { AddEventComponent } from '../add-event/add-event.component'
import { EventListService } from '../../shared/event-list/event-list.service'
import { AppStateService } from '../../shared/app-state/app-state.service'
import { EventItem } from '../../shared/event-item/event-item'

@Component({
  selector: "list",
  template: `
    <StackLayout>
      <StackLayout orientation="horizontal">
        <Button text="Add Event" (tap)="addEvent()" style="width: 50%;" ></Button>
        <Button text="Logout" (tap)="logout()" style="width: 50%;"></Button>
      </StackLayout>
      <GridLayout>
        <ListView [items]="eventList" class="small-spacing" (itemTap)="itemTapped($event)">
          <template let-item="item">
            <StackLayout orientation="horizontal" >
              <Label [text]="item.eventTitle" class="small-spacing" style="width: 100"></Label>
              <Label [text]="item.eventNote" class="small-spacing" style="width: 100"></Label>
              <Label [text]="item.eventType" class="small-spacing" style="width: 100"></Label>
            </StackLayout>
          </template>
        </ListView>
      </GridLayout>
    </StackLayout>
  `
})
export class ListComponent implements OnInit {
  eventList: observableArray.ObservableArray<EventItem>
  addResult: any
  currentId: number = 1
  

  constructor(private router: Router, 
              private modalService: ModalDialogService, 
              private viewContainerRef: ViewContainerRef, 
              private routerExtensions: RouterExtensions, 
              private appStateService: AppStateService,
              private pageRoute: PageRoute,
              private eventListService: EventListService){}

  ngOnInit() {
    // this.eventList.push({ name: "Apples" });
    // this.eventList.push({ name: "Bananas" });
    // this.eventList.push({ name: "Oranges" });
    // this.eventList = [{eventTitle: 'my event', eventNote: 'some text about the event', eventType: 'type', id: 10}]
    // this.eventList = this.eventListService.getEvents()
    this.eventListService.all().then(
      events => {
        console.dump(events)
        this.eventList = events
      },
      error => {
        console.log(`ListComponent: Error - ${error}`)
      }
    )

  }

  addEvent() {
    console.log('addEvent() running')
    let options: ModalDialogOptions =  {
      viewContainerRef: this.viewContainerRef
    }

    this.modalService.showModal(AddEventComponent, options).then(
      (event: any) => {
        // {eventTitle: this.eventTitle, eventNote: this.eventNote, eventType: this.eventType}
        console.dump(event)
        this.eventListService.addEvent(event, this.eventList)
          .then( events => {
            this.eventList = events
          })
      })
  }


  itemTapped(args){
    
    console.dump(args.index)
    console.dump(this.eventList.getItem(args.index))
    // console.dump(this.eventList[args.index])
    console.log('navigate to sign-up page for this item')
    
    
    this.back(args.index)

  }

  logout() {
    this.appStateService.setLoginFalse()
    this.routerExtensions.navigate(["sign-up"], { clearHistory: true })
  }

  back(index) {
    this.routerExtensions.navigate(["sign-up",index])
  }
}