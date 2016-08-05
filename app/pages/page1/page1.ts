import {Page} from 'ionic-angular';
import {Main} from '../main/main';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  private main;
  constructor() {
    this.main = Main;
  }
}
