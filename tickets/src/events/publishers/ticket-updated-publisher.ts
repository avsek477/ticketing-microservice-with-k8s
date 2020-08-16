import { Publisher, Subjects, TicketUpdatedEvent } from '@tmavisek/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}