import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
LocaleConfig.locales['fr'] = {
  monthNames: [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  monthNamesShort: ['Jan.', 'Feb.', 'Mar.', 'April', 'May', 'June', 'July.', 'August', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'],
  today: "today"
};

LocaleConfig.defaultLocale = 'fr';

const Calendar = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
  );
};

<Calendar
  // Customize the appearance of the calendar
  style={{
    borderWidth: 1,
    borderColor: 'gray',
    height: 350
  }}
  // Specify the current date
  current={'11-08-2024'}
  // Callback that gets called when the user selects a day
  onDayPress={day => {
    console.log('selected day', day);
  }}
  // Mark specific dates as marked
  markedDates={{
    '11-08-2024': {selected: true, marked: true, selectedColor: 'blue'},
    '11-09-2024': {marked: true},
    '11-10-2024': {selected: true, marked: true, selectedColor: 'blue'}
  }}
  theme={{
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    textDisabledColor: '#dd99ee'
  }}
/>


export default Calendar;