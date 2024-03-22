import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarComponent = () => {
  const events = [
    { title: 'DBMS-Assignment2', date: '2024-03-15' },
    { title: 'OS-Test', date: '2024-03-28' },
    // Add more events as needed
  ];

  return (
    <div href="#" class=" mt-10 block  w-full p-6  bg-white border border-violet-500 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 hover:bg-violet-200" style={{paddingRight:10}}>
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
    </div>
  );
};

export default CalendarComponent;
