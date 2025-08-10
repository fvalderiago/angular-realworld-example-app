import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule /* other imports */],
  templateUrl: "./newsletter-manager.component.html",
})
export class NewsletterManagerComponent implements OnInit {
  subscribers = [
    { email: "user1@example.com", subscribedAt: "2025-08-01" },
    { email: "user2@example.com", subscribedAt: "2025-08-03" },
  ];

  ngOnInit(): void {}

  removeSubscriber(index: number): void {
    this.subscribers.splice(index, 1);
  }
}
