import {Page} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Page({
  templateUrl: 'build/pages/main/main.html',
})
export class Main {
  private tabs;
  constructor() {
    this.tabs = TabsPage;
  }
}
