import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Month {
  value: string;
  display: string;
}
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  constructor() { }
  getUrl() {
    return "url('../../assets/img/blob-small.png')";
  }
  selectedValue: string | undefined;
  months: Month[] = [
    {value: '1 Month', display: '1 Month'},
    {value: '3 Months', display: '3 Months'},
    {value: '6 Months', display: '6 Months'}
  ];
  income = 30;
  expense = 30;
  // @ts-ignore
  updateSetting(event): void {
    this.income = event.value; }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  updateSetting(event) {
    this.expense = event.value; }
  ngOnInit(): void {
  }

}
