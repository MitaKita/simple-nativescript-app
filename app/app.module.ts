import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from 'nativescript-angular/router'

import { AppComponent } from "./app.component";
import { ListComponent } from "./pages/list/list.component"
import { LoginComponent } from "./pages/login/login.component"
import { SignUpComponent } from "./pages/sign-up/sign-up.component"
import { AddEventComponent } from "./pages/add-event/add-event.component"
import { routes, navigatableComponents } from './app.routing'

@NgModule({
  imports: [
    NativeScriptFormsModule,
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ListComponent,
    AddEventComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
