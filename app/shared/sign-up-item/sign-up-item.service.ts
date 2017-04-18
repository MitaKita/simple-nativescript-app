import { Injectable } from "@angular/core"

import { SignUpItem } from "./sign-up-item"
import { SignUpItemHelper } from "./sign-up-item-helper"

@Injectable()
export class SignUpItemService {

  private signupHelper

  constructor() {
    this.signupHelper = new SignUpItemHelper()
  }

  signUp(signUpItem: SignUpItem) {
    this.signupHelper.add(signUpItem)
  }
}