import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  item: FirebaseObjectObservable<any []>;
  items: FirebaselistObservable<any []>;

  constructor(private af: AngularFire){
    this.item = af.database.object('/item');
    this.items = af.database.list('/items');
  }
  save(newName: string) {
    this.item.set({ name: newName });
  }
  update(newSize: string) {
    this.item.update({ size: newSize });
  }
  delete() {
    this.item.remove();
  }

  addItem(newName: string) {
    this.items.push({ name: newName });
  }
  updateItem(key: string, newName: string) {
    this.items.update(key, { name: newName });
  }
  deleteItem(key: string) {
    this.items.remove(key);
  }
  deleteEverything() {
    this.items.remove();
  }
}
