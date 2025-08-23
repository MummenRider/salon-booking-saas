export interface SalonDetails {
  salonName: string;
  address: string;
  contactNumber: string;
  services: Service[];
}
export interface Service {
  serviceName: string;
  description: string;
  duration: number;
  price: number;
}
