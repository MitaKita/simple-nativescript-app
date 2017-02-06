import { LoginComponent } from "./pages/login/login.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component"
import { ListComponent } from "./pages/list/list.component"
import { AddEventComponent } from "./pages/add-event/add-event.component"

export const routes = [
  { path: "", component: SignUpComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "list", component: ListComponent },
  { path: "login", component: LoginComponent },
  { path: "add-event", component: AddEventComponent }
  
];

export const navigatableComponents = [
  SignUpComponent,
  ListComponent,
  LoginComponent,
  AddEventComponent
];