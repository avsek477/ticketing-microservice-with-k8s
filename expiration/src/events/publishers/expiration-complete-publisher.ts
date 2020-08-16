import { Subjects, Publisher, ExpirationCompleteEvent } from '@tmavisek/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}