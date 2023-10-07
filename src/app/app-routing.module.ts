import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {CreateAdvComponent} from "./pages/create-adv/create-adv.component";

const routes: Routes = [
  {path:'', component: MainPageComponent},
  {path:'profile', component:ProfileComponent},
  //{path:'advert/:id', component:Advert},
  {path:'newAdv',component:CreateAdvComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
