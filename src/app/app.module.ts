import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { NewsletterFormComponent } from "./newsletter/newsletter-form/newsletter-form.component";
import { NewsletterManagerComponent } from "./newsletter/newsletter-manager/newsletter-manager.component";

@NgModule({
  declarations: [
    AppComponent,
    NewsletterFormComponent,
    NewsletterManagerComponent,
  ],
  imports: [BrowserModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
