class Address {
  city: string;
  latitude: number;
  longitude: number;
  postcode: string;
  street: string;
}

export class Place {
  address: Address;
  zone: string;
  street: string;
  latitude: string;
  longitude: string;
  postcode: string;
  city: string;
}

export class Package {
  id: string;
  description: string;
  invoice_reference: string;
  client_reference: string;

  origin: Place;
  destination: Place;
  // delivery_options:
}
