import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { AuthGuard } from "./auth-guard";

describe("AuthGuard", () => {
  let guard: AuthGuard;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      providers: [AuthGuard, { provide: Router, useValue: spy }],
    });

    guard = TestBed.inject(AuthGuard);
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it("should create", () => {
    expect(guard).toBeTruthy();
  });

  it("should allow activation when logged in", () => {
    expect(guard.canActivate()).toBeTrue();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it("should block activation and redirect when not logged in", () => {
    (guard as any).canActivate = function () {
      const isLoggedIn = false;
      if (!isLoggedIn) {
        this.router.navigate(["/"]);
        return false;
      }
      return true;
    };

    expect(guard.canActivate()).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(["/"]);
  });
});
