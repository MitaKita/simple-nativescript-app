import { Component } from "@angular/core"
import { Router, Params } from "@angular/router"
import dialogs = require("ui/dialogs")
import { PageRoute, RouterExtensions } from "nativescript-angular/router"
import scrollViewModule = require("ui/scroll-view")
import { CheckBox } from 'nativescript-checkbox'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'

import { AppStateService } from "./../../shared/app-state/app-state.service"
import { EventItem } from "./../../shared/event-item/event-item"


@Component({
  selector: "sign-up",
  template: `
      <ScrollView>
        <StackLayout>
          <Image src="res://apple" style="width: 100; height: 100;"></Image>
          <Label textWrap="true" [text]="currentEvent.eventTitle" style="font-size: 20; width: 100%; text-align: center;"></Label>
          <Label textWrap="true" [text]="currentEvent.eventNote" style="width: 100%; text-align: center;"></Label>
          <GridLayout columns="*, *" rows="40, 40, 40, 40, 40, 40" width="300" height="480">
            <TextField hint="First Name" [(ngModel)]="firstName" row="0" col="0" required></TextField>
            <TextField hint="Last Name" row="0" col="1"></TextField>
            <TextField hint="Company" row="1" col="0"></TextField>
            <TextField hint="Postal Code" row="1" col="1"></TextField>
            <TextField hint="Email Address" keyboardType="email"
              autocorrect="false" autocapitalizationType="none" row="2" col="0" colSpan="2"></TextField>

            <CheckBox text="I agree to the terms that are explained in this text" row="3" col="0" colSpan="2"></CheckBox>

            <Button text="Sign Up" row="4" col="0" (tap)="handleSignUpTap()"></Button>
            <Button text="Clear" row="4" col="1"></Button>
            <Button text="Hidden button" (tap)="handleHiddenButtonTap()" row="5" col="0" colSpan="2"></Button>
          </GridLayout>
        </StackLayout>
      </ScrollView>
  `
})
export class SignUpComponent  {

  public currentEvent: EventItem
  public firstName: string
  public lastName: string
  public company: string
  public postalCode: string
  public emailAddress: string
  public agreeChecked: boolean

  constructor(private routerExtensions: RouterExtensions, private appStateService: AppStateService, private pageRoute: PageRoute) {
    console.log('sign-up.component constructor')
    this.currentEvent = new EventItem("Default Event", "About the event", "Event type", new Date())
    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach(params => {
        // this.currentEvent = params['event']
        console.log('activatedRoute params')
        console.dump(params)
      })
  }

  handleSignUpTap() {
    console.log(`this.firstName: ${this.firstName} this.lastName: ${this.lastName} 
    this.company: ${this.company} this.postalCode: ${this.postalCode} 
    this.emailAddress: ${this.emailAddress} this.agreeChecked: ${this.agreeChecked}`)
  }

  handleHiddenButtonTap(){
    console.log(this.appStateService.isUserLoggedIn())
    if (this.appStateService.isUserLoggedIn()) {
      this.navigateToList()
    } else {
      this.openLogin()
    }
  }

  openLogin() {
    console.log('openLogin()')
    // this.router.navigate(['/list'])
    dialogs.login("", "User", "Password").then(
      result => {
        console.log(result.result)
        console.log(result.userName)
        console.log(result.password)
        if(result.result) {
          if (this.isCorrectUser(result.userName) && this.isCorrectPassword(result.password)) {
            this.appStateService.setLoginTrue()
            console.log('navigating to list')
            // this.router.navigate(['/list'])
            this.navigateToList()
          }
        }
      }
    )
  }

  isCorrectUser(user): boolean {
    return user === 'User'
  }

  isCorrectPassword(password): boolean {
    return password === 'Password'
  }

  navigateToList(){
    this.routerExtensions.navigate(['/list'], { clearHistory: true })
  }
}