import { Injectable, signal } from '@angular/core';

export type NotificationType = 'message-sent' | 'success' | 'error' | 'info' | 'warning';

export interface NotificationItem {
  message: string;
  type: NotificationType;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public readonly notifications = signal<NotificationItem[]>([]);

  public show(
    message: string,
    type: NotificationType,
    duration = 5000
  ): void {
    const item: NotificationItem = { message, type };
    this.notifications.update((list) => [...list, item]);

    setTimeout(() => {
      this.notifications.update((list) => list.filter((n) => n !== item));
    }, duration);
  }

  public messageSent(message: string, duration: number): void {
    this.show(message, 'message-sent', duration);
  }

  public success(message: string, duration: number): void {
    this.show(message, 'success', duration);
  }

  public error(message: string, duration: number): void {
    this.show(message, 'error', duration);
  }

  public info(message: string, duration: number): void {
    this.show(message, 'info', duration);
  }

  public warning(message: string, duration: number): void {
    this.show(message, 'warning', duration);
  }
}
