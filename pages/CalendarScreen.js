// import React, { useState, useRef } from 'react';

// import {
//   StyleSheet,
//   Dimensions,
//   TouchableWithoutFeedback,
//   SafeAreaView,
//   View,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// import moment from 'moment';
// import Swiper from 'react-native-swiper';

// const { width } = Dimensions.get('window');

// export default function CalendarScreen() {
//   const swiper = useRef();
//   const [value, setValue] = useState(new Date());
//   const [week, setWeek] = useState(0);

//   const weeks = React.useMemo(() => {
//     const start = moment().add(week, 'weeks').startOf('week');

//     return [-1, 0, 1].map(adj => {
//       return Array.from({ length: 7 }).map((_, index) => {
//         const date = moment(start).add(adj, 'week').add(index, 'day');

//         return {
//           weekday: date.format('ddd'),
//           date: date.toDate(),
//         };
//       });
//     });
//   }, [week]);

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.title}>Your FitITs</Text>
//         </View>

//         <View style={styles.picker}>
//           <Swiper
//             index={1}
//             ref={swiper}
//             loop={false}
//             showsPagination={false}
//             onIndexChanged={ind => {
//               if (ind === 1) {
//                 return;
//               }
//               setTimeout(() => {
//                 const newIndex = ind - 1;
//                 const newWeek = week + newIndex;
//                 setWeek(newWeek);
//                 setValue(moment(value).add(newIndex, 'week').toDate());
//                 swiper.current.scrollTo(1, false);
//               }, 100);
//             }}>
//             {weeks.map((dates, index) => (
//               <View style={styles.itemRow} key={index}>
//                 {dates.map((item, dateIndex) => {
//                   const isActive =
//                     value.toDateString() === item.date.toDateString();
//                   return (
//                     <TouchableWithoutFeedback
//                       key={dateIndex}
//                       onPress={() => setValue(item.date)}>
//                       <View
//                         style={[
//                           styles.item,
//                           isActive && {
//                             backgroundColor: '#111',
//                             borderColor: '#111',
//                           },
//                         ]}>
//                         <Text
//                           style={[
//                             styles.itemWeekday,
//                             isActive && { color: '#fff' },
//                           ]}>
//                           {item.weekday}
//                         </Text>
//                         <Text
//                           style={[
//                             styles.itemDate,
//                             isActive && { color: '#fff' },
//                           ]}>
//                           {item.date.getDate()}
//                         </Text>
//                       </View>
//                     </TouchableWithoutFeedback>
//                   );
//                 })}
//               </View>
//             ))}
//           </Swiper>
//         </View>

//         <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
//           <Text style={styles.subtitle}>{value.toDateString()}</Text>
//           <View style={styles.placeholder}>
//             <View style={styles.placeholderInset}>
//               {/* Replace with your content */}
//             </View>
//           </View>
//         </View>

//         <View style={styles.footer}>
//           <TouchableOpacity
//             onPress={() => {
//               // handle onPress
//             }}>
//             <View style={styles.btn}>
//               <Text style={styles.btnText}>Save</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingVertical: 24,
//   },
//   header: {
//     paddingHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: '700',
//     color: '#1d1d1d',
//     marginBottom: 12,
//   },
//   picker: {
//     flex: 1,
//     maxHeight: 74,
//     paddingVertical: 12,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   subtitle: {
//     fontSize: 17,
//     fontWeight: '600',
//     color: '#1d1d1d',
//     marginBottom: 12,
//   },
//   footer: {
//     marginTop: 'auto',
//     paddingHorizontal: 16,
//   },
//   /** Item */
//   item: {
//     flex: 1,
//     height: 50,
//     marginHorizontal: 4,
//     paddingVertical: 6,
//     paddingHorizontal: 4,
//     borderWidth: 1,
//     borderRadius: 8,
//     borderColor: '#e3e3e3',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   itemRow: {
//     width: width,
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'space-between',
//     paddingHorizontal: 12,
//   },
//   itemWeekday: {
//     fontSize: 13,
//     fontWeight: '500',
//     color: '#800f2f',
//     marginBottom: 4,
//   },
//   itemDate: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#111',
//   },
//   /** Placeholder */
//   placeholder: {
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//     height: 400,
//     marginTop: 0,
//     padding: 0,
//     backgroundColor: 'transparent',
//   },
//   placeholderInset: {
//     borderWidth: 4,
//     borderColor: '#aeafb3',
//     borderStyle: 'dashed',
//     borderRadius: 9,
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//   },
//   /** Button */
//   btn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 8,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     backgroundColor: '#800f2f',
//     borderColor: '#ffff',
//   },
//   btnText: {
//     fontSize: 18,
//     lineHeight: 26,
//     fontWeight: '600',
//     color: '#fff',
//   },
// });
import React, {useState} from 'react';
// import {View,Text} from 'react-native';
import {Calendar, CalendarList, LocaleConfig, Agenda} from 'react-native-calendars';
// import moment from 'moment';
// import Swiper from 'react-native-swiper';
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

const CalendarScreen = () => {
  const [selected, setSelected] = useState('');


  return (
    <CalendarList
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



export default CalendarScreen;