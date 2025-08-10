import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "./core/layout/header.component";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./core/layout/footer.component";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
})
export class AppComponent implements OnInit {
  title = "conduit-angular";
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
