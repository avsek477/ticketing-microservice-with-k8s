import { Publisher, OrderCreatedEvent, Subjects } from '@tmavisek/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}