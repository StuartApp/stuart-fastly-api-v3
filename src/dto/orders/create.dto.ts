export class Scheduling {
  start_at: string;
  end_at: string;
}

export class Address {
  street_name: string;
  doorbell_number: string;
  notes: string;
}

export class CollectTask {
  scheduling: Scheduling;
  address: Address;
}

export class DeliverTask {
  scheduling: Scheduling;
  address: Address;
}

export class OrderCreateRequest {
  service: string;
  package: {
    reference: string;
    dimensions: {
      size: string;
    };
    collect_task: CollectTask;
    deliver_task: DeliverTask;
  };
}

export class OrderCreateResponse {
  package: {
    reference: string;
  };
}

class Delivery {
  id: number;
  collect_task: CollectTask;
  deliver_task: DeliverTask;
}
