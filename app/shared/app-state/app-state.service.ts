import { Injectable, OnInit } from "@angular/core"

@Injectable()
export class AppStateService implements OnInit {

  private isLoggedIn: boolean
  
  ngOnInit() {
  }

  public setLoginTrue() {
    this.isLoggedIn = true
  }

  public setLoginFalse() {
    this.isLoggedIn = false
  }

  public isUserLoggedIn() {
    return this.isLoggedIn
  }
}