import { Subjects, Publisher, PaymentCreatedEvent } from '@tmavisek/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}