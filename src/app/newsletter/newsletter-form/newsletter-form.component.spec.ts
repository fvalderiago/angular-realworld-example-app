import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NewsletterFormComponent } from "./newsletter-form.component";
import { CommonModule } from "@angular/common";

describe("NewsletterFormComponent", () => {
  let component: NewsletterFormComponent;
  let fixture: ComponentFixture<NewsletterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NewsletterFormComponent, // standalone component
        CommonModule, // common Angular directives like ngIf, ngFor
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsletterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should invalidate the form when email is empty", () => {
    component.form.controls["email"].setValue("");
    expect(component.form.valid).toBeFalse();
  });

  it("should validate the form when email is valid", () => {
    component.form.controls["email"].setValue("test@example.com");
    expect(component.form.valid).toBeTrue();
  });
});
