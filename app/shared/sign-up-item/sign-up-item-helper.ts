import observableArrayModule = require("data/observable-array")

import { SignUpItem } from "./sign-up-item"

export class SignUpItemHelper {

  private signUps: SignUpItem[]

  constructor() {
    this.signUps = []
  }

  add(signUpItem: SignUpItem) {
    this.signUps.push(signUpItem)
  }

}