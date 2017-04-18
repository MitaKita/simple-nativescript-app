import { Component, ElementRef, ViewChild, OnInit } from "@angular/core"
import { Router, Params } from "@angular/router"
import dialogs = require("ui/dialogs")
import { PageRoute, RouterExtensions } from "nativescript-angular/router"
import scrollViewModule = require("ui/scroll-view")
import { CheckBox } from 'nativescript-checkbox'
import { prompt } from "ui/dialogs"

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'

import { AppStateService } from "./../../shared/app-state/app-state.service"
import { EventListService } from "./../../shared/event-list/event-list.service"
import { EventItem } from "./../../shared/event-item/event-item"
import { SignUpItem } from "./../../shared/sign-up-item/sign-up-item"
import { SignUpItemService } from "./../../shared/sign-up-item/sign-up-item.service"

@Component({
  selector: "sign-up",
  template: `
      <ScrollView>
        <StackLayout>
          <Image src="res://apple" style="width: 100; height: 100;"></Image>
          <Label textWrap="true" [text]="currentEvent.eventTitle" style="font-size: 20; width: 100%; text-align: center;"></Label>
          <Label textWrap="true" [text]="currentEvent.eventNote" style="width: 100%; text-align: center;"></Label>
          <GridLayout columns="*, *" rows="40, 40, 40, 40, 40, 40" width="300" height="480">
            <TextField #firstName hint="First Name*" [(ngModel)]="currentSignUpItem.firstName" row="0" col="0" required ngClass="getClass()"></TextField>
            <TextField #lastName hint="Last Name" [(ngModel)]="currentSignUpItem.lastName" row="0" col="1"></TextField>
            <TextField #company hint="Company" [(ngModel)]="currentSignUpItem.company" row="1" col="0"></TextField>
            <TextField #postalCode hint="Postal Code" [(ngModel)]="currentSignUpItem.postalCode" row="1" col="1"></TextField>
            <TextField #emailAddress hint="Email Address" [(ngModel)]="currentSignUpItem.emailAddress" keyboardType="email"
              autocorrect="false" autocapitalizationType="none" row="2" col="0" colSpan="2"></TextField>

            <CheckBox #iAgree text="I agree to the terms that are explained in this text" ([checked])="agreeChecked" row="3" col="0" colSpan="2"></CheckBox>

            <Button text="Sign Up" row="4" col="0" (tap)="signUp()"></Button>
            <Button text="Clear" (tap)="clear()" row="4" col="1"></Button>
            <Button text="Hidden button" (tap)="handleHiddenButtonTap()" row="5" col="0" colSpan="2"></Button>
          </GridLayout>
        </StackLayout>
      </ScrollView>
  `,
  providers: [SignUpItemService]
})
export class SignUpComponent implements OnInit {

  @ViewChild("firstName") firstNameElement: ElementRef
  @ViewChild("lastName") lastNameElement: ElementRef
  @ViewChild("company") companyElement: ElementRef
  @ViewChild("postalCode") postalCodeElement: ElementRef
  @ViewChild("emailAddress") emailAddressElement: ElementRef
  @ViewChild("iAgree") iAgreeElement: ElementRef

  public currentEvent: EventItem
  public currentSignUpItem: SignUpItem

  // public firstName: string
  // public lastName: string
  // public company: string
  // public postalCode: string
  // public emailAddress: string
  // public agreeChecked: boolean

  constructor(private routerExtensions: RouterExtensions, 
              private appStateService: AppStateService, 
              private pageRoute: PageRoute,
              private eventListService: EventListService,
              private signUpItemService: SignUpItemService) {
    console.log('sign-up.component constructor')
    this.currentSignUpItem = new SignUpItem()
    console.dump(this.currentSignUpItem)
    this.currentEvent = new EventItem("Default Event", "About the event", "Event type", new Date())
    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach((params: any) => {
        // this.currentEvent = params['event']
        console.log('activatedRoute params')
        console.dump(params)
        if (params.id) {
          this.setCurrentEvent(params.id)
        }
      })
  }

  ngOnInit(){
    
  }

  setCurrentEvent(index) {
    console.log(`setCurrentEvent(${index})`)
    // console.dump(this.eventListService)
    console.dump(this.eventListService.getEvent)
    console.dump(this.eventListService.getEvent(index))
    this.currentEvent = this.eventListService.getEvent(index)
  }



  signUp() {
    console.dump(this.currentSignUpItem)
    if (this.currentSignUpItem.isValid()) {
      alert('valid signup')
    } else {
      
    }
  }

  clear() {
    this.currentSignUpItem.clear()
    this.emailAddressElement.nativeElement.text = ""
    this.iAgreeElement.nativeElement.checked = false
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

  getFirstNameClass(): string {
    return this.currentSignUpItem.isValidFirstName() ? 'valid' : 'invalid'
  }

  getClass(): string[] {
    return ["valid"]
  }
}