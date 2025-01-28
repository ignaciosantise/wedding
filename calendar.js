function createCalendarEvent() {
  const eventDetails = {
    title: 'Casamiento Pali y Nacho',
    description: 'Celebración en Sisu Multiespacio, Ing. Maschwitz',
    startDate: '2025-04-05T12:30:00',
    endDate: '2025-04-05T20:30:00',
    location: 'Sisu Multiespacio, Colectora Oeste Ramal Escobar 2125, B1623 Ingeniero Maschwitz, Provincia de Buenos Aires, Argentina'
  };

  const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.startDate.replace(/[-:]/g, '')}/${eventDetails.endDate.replace(/[-:]/g, '')}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
  window.open(googleCalUrl);
}

document.addEventListener('DOMContentLoaded', () => {
  const calendarButton = document.getElementById('calendar-button');
  calendarButton.addEventListener('click', (e) => {
    e.preventDefault();
    createCalendarEvent();
  });
}); 