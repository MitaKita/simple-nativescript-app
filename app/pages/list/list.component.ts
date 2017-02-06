import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router"
import { Observable } from "rxjs/Rx"

import { EventListService } from '../../shared/event-list/event-list.service'

@Component({
  selector: "list",
  template: `
    <StackLayout>
      <Button text="Add Event" (tap)="addEvent()" ></Button>
      <GridLayout>
        <ListView [items]="eventList" class="small-spacing">
          <template let-item="item">
            <Label [text]="item.name" class="medium-spacing"></Label>
          </template>
        </ListView>
      </GridLayout>
    </StackLayout>
  `
})
export class ListComponent implements OnInit {
  eventList: Array<Object> = []
  

  constructor(private router: Router){}

  ngOnInit() {
    // this.eventList.push({ name: "Apples" });
    // this.eventList.push({ name: "Bananas" });
    // this.eventList.push({ name: "Oranges" });
  }

  addEvent() {
    this.router.navigate(["add-event"])
  }
}