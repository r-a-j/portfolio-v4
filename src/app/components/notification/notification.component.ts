import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef, effect } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  public notificationService = inject(NotificationService);
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    effect(() => {
      this.notificationService.notifications();
      this.cdr.markForCheck();
    });
  }
}
