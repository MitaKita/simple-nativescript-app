import { Component } from "@angular/core";
import { Router } from "@angular/router"

@Component({
  selector: "login",
  template: `
    <StackLayout>
      <TextField hint="Email Address" keyboardType="email"
        autocorrect="false" autocapitalizationType="none"></TextField>
      <TextField hint="Password" secure="true"></TextField>

      <Button text="Login" (tap)="login()"></Button>
    </StackLayout>
  `
})
export class LoginComponent {
  
  constructor(private router: Router){}

  login() {
    this.router.navigate(['/list'])
  }
}


