import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseDataServiceService {

  constructor() {
    root: firebase.database().ref(),
    items: root.child('items'),
    texts: root.child('texts'),
    users: root.child('users'),
  }

}
