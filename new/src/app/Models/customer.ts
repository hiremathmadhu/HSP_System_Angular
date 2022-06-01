export class Customer {
    id(id: any) {
      throw new Error('Method not implemented.');
    }
    public customerId: number;
    public customerName: string;
    public address: string;
    public city: string;
    public state: string;
    public zipCode: number;
    public customerRating: string;
    public customerReview: string;
}
