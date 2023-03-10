import { Component } from '@angular/core';
import { CalendarMode, Step } from 'ionic2-calendar';
import data from "src/assets/journey.json";
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  eventSource;
  calendar = {
    mode: 'month' as CalendarMode,
    step: 30 as Step,
    currentDate: new Date(),
    dateFormatter: {
      formatMonthViewDay: function(date:Date) {
          return date.getDate().toString();
      },
      formatMonthViewDayHeader: function(date:Date) {
          return 'testMDH';
      },
      formatMonthViewTitle: function(date:Date) {
          return 'testMT';
      },
      formatWeekViewDayHeader: function(date:Date) {
          return 'testWDH';
      },
      formatWeekViewTitle: function(date:Date) {
          return 'testWT';
      },
      formatWeekViewHourColumn: function(date:Date) {
          return 'testWH';
      },
      formatDayViewHourColumn: function(date:Date) {
          return 'testDH';
      },
      formatDayViewTitle: function(date:Date) {
          return 'testDT';
      }
  }
};

  constructor() {
    
  }

  onCurrentChanged = (ev: Date) => {
    console.log('Currently viewed date: ' + ev);
};

onEventSelected = (event) => {
  console.log(event.title);
};
onTimeSelected = (ev: { selectedTime: Date, events: any[], disabled: boolean }) => {
  console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
};

}