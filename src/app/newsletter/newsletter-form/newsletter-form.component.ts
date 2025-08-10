import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Component({
  selector: "app-newsletter-form",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./newsletter-form.component.html",
  styleUrls: ["./newsletter-form.component.css"],
})
export class NewsletterFormComponent {
  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
  });
  message = "";
  loading = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}

  subscribe() {
    if (this.form.invalid) return;

    this.loading = true;
    const email = this.form.value.email;

    of({ success: true })
      .pipe(delay(1000))
      .subscribe({
        next: () => {
          this.loading = false;
          this.message = `Subscription successful! Thank you, ${email}.`;
          this.form.reset();
        },
        error: () => {
          this.loading = false;
          this.message = "Subscription failed. Please try again.";
        },
      });
  }
}
