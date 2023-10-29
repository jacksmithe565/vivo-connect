/* complexCode.js */

// This code generates a calendar for a given year and allows users to add, edit and remove events.

// Constants for the number of days in each month
const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Function to check if a year is a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Function to get the name of the month
function getMonthName(month) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[month];
}

// Function to generate the calendar for a given year
function generateCalendar(year) {
  const isLeap = isLeapYear(year);
  const calendar = {};

  for (let month = 0; month < 12; month++) {
    const daysInMonth = month === 1 && isLeap ? 29 : daysInMonths[month];
    const monthName = getMonthName(month);
    calendar[monthName] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const events = [];

      calendar[monthName].push({
        date: date.toISOString(),
        events: events
      });
    }
  }

  return calendar;
}

// Function to add an event to a specific day
function addEvent(calendar, month, day, event) {
  const monthName = getMonthName(month);
  const calendarMonth = calendar[monthName][day - 1];

  calendarMonth.events.push(event);
}

// Function to remove an event from a specific day
function removeEvent(calendar, month, day, eventIndex) {
  const monthName = getMonthName(month);
  const calendarMonth = calendar[monthName][day - 1];

  if (calendarMonth) {
    calendarMonth.events.splice(eventIndex, 1);
  }
}

// Usage example:

const year = 2022;
const calendar = generateCalendar(year);

addEvent(calendar, 0, 15, "Meeting with client");
addEvent(calendar, 2, 10, "Birthday party");
addEvent(calendar, 2, 10, "Dinner with friends");
removeEvent(calendar, 2, 10, 1);

console.log(calendar);

// More code can be added to enhance the functionality of the calendar, such as editing events, displaying the calendar in a graphical interface, etc.