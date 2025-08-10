import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TagsService } from "../../services/tags.service";
import { ArticleListConfig } from "../../models/article-list-config.model";
import { NgClass } from "@angular/common";
import { ArticleListComponent } from "../../components/article-list.component";
import { tap } from "rxjs/operators";
import { UserService } from "../../../../core/auth/services/user.service";
import { RxLet } from "@rx-angular/template/let";
import { IfAuthenticatedDirective } from "../../../../core/auth/if-authenticated.directive";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { NewsletterFormComponent } from "../../../../newsletter/newsletter-form/newsletter-form.component";
@Component({
  selector: "app-home-page",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  imports: [
    NgClass,
    ArticleListComponent,
    RxLet,
    IfAuthenticatedDirective,
    NewsletterFormComponent,
  ],
})
export default class HomeComponent implements OnInit {
  isAuthenticated = false;
  listConfig: ArticleListConfig = {
    type: "all",
    filters: {},
  };
  tags$ = inject(TagsService)
    .getAll()
    .pipe(tap(() => (this.tagsLoaded = true)));
  tagsLoaded = false;
  destroyRef = inject(DestroyRef);

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
  ) {}

  ngOnInit() {
    this.isAuthenticated = !!localStorage.getItem("jwtToken");
  }

  setListTo(type: string = "", filters: Object = {}): void {
    if (type === "feed" && !this.isAuthenticated) {
      void this.router.navigate(["/login"]);
      return;
    }

    this.listConfig = { type: type, filters: filters };
  }
}
