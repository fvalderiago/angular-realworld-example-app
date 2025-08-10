import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class NewsletterService {
  private subscribers: string[] = [
    "reader1@example.com",
    "reader2@example.com",
  ];

  subscribe(email: string): Observable<void> {
    if (this.subscribers.includes(email)) {
      return throwError(() => new Error("Already subscribed"));
    }
    this.subscribers.push(email);
    return of(void 0).pipe(delay(500));
  }

  getSubscribers(): Observable<string[]> {
    return of([...this.subscribers]).pipe(delay(500));
  }

  removeSubscriber(email: string): Observable<void> {
    const index = this.subscribers.indexOf(email);
    if (index === -1) {
      return throwError(() => new Error("Subscriber not found"));
    }
    this.subscribers.splice(index, 1);
    return of(void 0).pipe(delay(500));
  }
}
