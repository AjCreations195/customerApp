export class Customer {
  public firstName: string;
  public lastName: string;
  public email: string;
  public address: string;
  public contactNumber: number;
  public imagePath: string;

  constructor(
    f_Name: string,
    l_Name: string,
    email: string,
    address: string,
    number: number,
    imagePath: string
  ) {
    this.firstName = f_Name;
    this.lastName = l_Name;
    this.email = email;
    this.address = address;
    this.contactNumber = number;
    this.imagePath = imagePath;
  }
}
