function createCalendarEvent() {
  const eventDetails = {
    title: 'Casamiento Pali y Nacho',
    description: 'Celebración en Sisu Multiespacio, Ing. Maschwitz',
    startDate: '2025-04-05T12:30:00',
    endDate: '2025-04-05T20:30:00',
    location: 'Sisu Multiespacio, Colectora Oeste Ramal Escobar 2125, B1623 Ingeniero Maschwitz, Provincia de Buenos Aires, Argentina'
  };

  // detect if its iOS
  // const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  // if (isIOS) {
  //   // format for iOS
  //   const icsUrl = `data:text/calendar;charset=utf-8,BEGIN:VCALENDAR
  //   VERSION:2.0
  //   BEGIN:VEVENT
  //   DTSTART:${eventDetails.startDate.replace(/[-:]/g, '')}
  //   DTEND:${eventDetails.endDate.replace(/[-:]/g, '')}
  //   SUMMARY:${eventDetails.title}
  //   DESCRIPTION:${eventDetails.description}
  //   LOCATION:${eventDetails.location}
  //   END:VEVENT
  //   END:VCALENDAR`;
  //   window.open(encodeURI(icsUrl));
  // } else {
    // for android and others, use google calendar
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.startDate.replace(/[-:]/g, '')}/${eventDetails.endDate.replace(/[-:]/g, '')}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
    window.open(googleCalUrl);
  // }
}

document.addEventListener('DOMContentLoaded', () => {
  const calendarButton = document.getElementById('calendar-button');
  calendarButton.addEventListener('click', (e) => {
    e.preventDefault();
    createCalendarEvent();
  });
}); 