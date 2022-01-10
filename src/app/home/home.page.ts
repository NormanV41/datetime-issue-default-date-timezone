import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public timezoneOffset = '2022-01-06T22:00:00.000-06:00';
  public utcTimezone = '2022-01-07T04:00:00.000Z';
  public equalityMessage = '';

  constructor() {
    const timezoneOffsetDate = new Date(this.timezoneOffset);
    const utcTimezoneDate = new Date(this.utcTimezone);
    if (timezoneOffsetDate.getTime() === utcTimezoneDate.getTime()) {
      this.equalityMessage = 'for javascript this two dates are equal.';
    }
  }
}
