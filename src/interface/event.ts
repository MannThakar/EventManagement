interface iEvent {
  id: number | string;
  title: string;
  description: string;
  eventType: string;
  location?: string;
  eventLink?: string;
  startDateTime: string;
  endDateTime: string;
  category: string;
  organizer: string;
  image?: string;
}

interface EventModalProps {
  onClose: () => void;
  onSave?: (updatedEvent: iEvent) => void;
}

export type { iEvent, EventModalProps };
