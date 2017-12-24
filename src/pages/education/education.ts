import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddEdPage } from '../add-ed/add-ed';

@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class EducationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  items = [
    'Kitchen Staff',
    'Pharmacy Techician',
    'Cashier',
    'Businesss Systems Analyst',
    'Pet Walker',
    'Office Administrative Assistant'
  ];

  add() {
    this.navCtrl.push(AddEdPage);
  }

}
