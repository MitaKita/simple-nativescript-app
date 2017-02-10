import { Component } from "@angular/core"
import { Router, Params } from "@angular/router"
import dialogs = require("ui/dialogs")
import { PageRoute, RouterExtensions } from "nativescript-angular/router"

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'

import { AppStateService } from "./../../shared/app-state/app-state.service"
import { EventItem } from "./../../shared/event-item/event-item"

@Component({
  selector: "sign-up",
  template: `
    <StackLayout>
      <TextField hint="First Name"></TextField>
      <TextField hint="Last Name"></TextField>
      <TextField hint="Company (Optional)"></TextField>
      <TextField hint="Email Address" keyboardType="email"
        autocorrect="false" autocapitalizationType="none"></TextField>
      <TextField hint="Postal Code"></TextField>

      <Button text="I agree"></Button>
      <Button text="Sign Up"></Button>
      <Button text="Clear"></Button>
      <Button text="Hidden button" (tap)="handleHiddenButtonTap()"></Button>
    </StackLayout>
  `
})
export class SignUpComponent  {

  private currentEvent: EventItem

  constructor(private routerExtensions: RouterExtensions, private appStateService: AppStateService, private pageRoute: PageRoute) {
    console.log('sign-up.component constructor')
    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach(params => {
        // this.currentEvent = params['event']
        console.log('activatedRoute params')
        console.dump(params)
      })
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