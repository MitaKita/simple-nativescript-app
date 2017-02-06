import { Component } from "@angular/core"
import { Router } from "@angular/router"

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
      <Button text="Hidden button" (tap)="openLogin()"></Button>
    </StackLayout>
  `
})
export class SignUpComponent {

  constructor(private router: Router) {

  }

  openLogin() {
    // this.router.navigate(['/login'])
    this.router.navigate(['/login'])
  }
}