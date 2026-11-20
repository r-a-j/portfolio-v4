import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NotificationItem, NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  readonly notificationService = inject(NotificationService);

  dismiss(item: NotificationItem): void {
    this.notificationService.dismiss(item);
  }
}
