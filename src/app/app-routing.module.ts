import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NewsletterManagerComponent } from "./newsletter/newsletter-manager/newsletter-manager.component";
import { AuthGuard } from "./auth-guard";

const routes: Routes = [
  {
    path: "newsletter-manager",
    component: NewsletterManagerComponent,
    canActivate: [AuthGuard],
  },
  { path: "", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
