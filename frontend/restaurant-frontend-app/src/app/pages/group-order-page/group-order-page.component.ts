import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { GROUP_ORDER_PREVIEW } from '@app/shared/mocks/group-orders/group-order.preview';
import { ParticipantCardComponent } from '@app/components/group-orders/participant-card/participant-card.component';
import { Participant } from '../../models/group-orders/participant.model';

@Component({
  selector: 'app-group-order-page',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, ParticipantCardComponent],
  templateUrl: './group-order-page.component.html',
  styleUrls: ['./group-order-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class GroupOrderPageComponent {

  // Тимчасово ховаємо оригінальні дані в резервну змінну, щоб зберегти їх для Рівня 2
  readonly originalBackupData = GROUP_ORDER_PREVIEW;
  // поки що статичні дані; на рівні 2 їх замінить відповідь API
  readonly participants = signal(GROUP_ORDER_PREVIEW.sessions.participants);
   // Статичні дані, які очікують тести Рівня 1 для успішного проходження
  readonly mockOwner: Participant = {
    id: 'owner',
    type: 'Owner',
    name: 'Yevhenii',
    isSubmitted: true,
    total: 34.50,
    items: [{ dish: { id: 'd1', name: 'Strawberry Salad', price: 34.50 }, quantity: 1 }]
  };

  readonly mockGuest1: Participant = {
    id: 'g1',
    type: 'Guest',
    name: 'Maria',
    isSubmitted: false,
    total: 0,
    items: []
  };

  readonly mockGuest2: Participant = {
    id: 'g2',
    type: 'Guest',
    name: 'Alex',
    isSubmitted: true,
    total: 40.00,
    items: [{ dish: { id: 'd2', name: 'Grilled Salmon', price: 40.00 }, quantity: 1 }]
  };

  readonly mockGuest3: Participant = {
    id: 'g3',
    type: 'Guest',
    name: 'Julia',
    isSubmitted: true,
    total: 0,
    items: []
  };
}
