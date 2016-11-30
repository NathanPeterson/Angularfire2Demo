export class User{
  id: number;
  username: string;
  email: string;
  dateOfBirth: string;
  address: string;
  //Enum type for flag of type of user
  //Password... string
  gender: string;
  discipline: string;
  degreeOfProfessionalism: string; // Find better name


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
