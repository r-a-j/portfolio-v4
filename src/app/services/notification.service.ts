import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    notifications: { message: string; type: string }[] = [];

    public show(message: string,
        type: 'message-sent' | 'success' | 'error' | 'info' | 'warning',
        duration: number = 5000): void {
        this.notifications.push({ message, type });
        setTimeout(() => this.notifications.shift(), duration);
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
