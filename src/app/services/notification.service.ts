import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    notifications: { message: string; type: string }[] = [];

    show(message: string, type: 'success' | 'error' | 'info' | 'warning', duration: number = 5000) {
        this.notifications.push({ message, type });
        setTimeout(() => this.notifications.shift(), duration);
    }

    success(message: string, duration: number) {
        this.show(message, 'success', duration);
    }

    error(message: string, duration: number) {
        this.show(message, 'error', duration);
    }

    info(message: string, duration: number) {
        this.show(message, 'info', duration);
    }

    warning(message: string, duration: number) {
        this.show(message, 'warning', duration);
    }
}
