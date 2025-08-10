import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CommonModule } from "@angular/common";

import { NewsletterManagerComponent } from "./newsletter-manager.component";

describe("NewsletterManagerComponent", () => {
  let component: NewsletterManagerComponent;
  let fixture: ComponentFixture<NewsletterManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NewsletterManagerComponent,
        CommonModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsletterManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
