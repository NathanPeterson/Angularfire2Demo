
import { TestBed, async } from '@angular/core/testing';
import { User } from './user';

describe('User', () => {

  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let user = new User({
      username: "DRS User",
      email: "example@example.com",
      dateOfBirth: "01/01/2016",
      address: "310 West Street",
      gender: "M",
      discipline: "Computer Science",
      degreeOfProfessionalism: "Doctor"
    });
    expect(user.username).toEqual('DRS User');
    expect(user.email).toEqual("example@example.com");
    expect(user.dateOfBirth).toEqual("01/01/2016");
    expect(user.address).toEqual("310 West Street");
    expect(user.gender).toEqual("M");
    expect(user.discipline).toEqual("Computer Science");
    expect(user.degreeOfProfessionalism).toEqual("Doctor");
  });

});
