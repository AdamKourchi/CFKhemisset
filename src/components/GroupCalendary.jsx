import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/dist/locale/fr";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
moment.locale("fr");

export default function GroupCalendary(props) {
  const { eta, group } = props.groupData;

  const events = group.events?.map((event) => ({
    title: event.title,
    start: new Date(event.start),
    end: new Date(event.end),
    allDay: true,
  }));

  if (!group || !group.links) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <p className="text-green-600 md:text-2xl mx-20 font-semibold text-lg my-5">
        Calendrier de la classe :
      </p>

      <div className="flex justify-center">
        <Calendar
          className="w-full mx-5 md:mx-20"
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={["month", "day"]} // Only show Month and Day views
          defaultView="month" // Default to Month view
          style={{ height: 500 }}
          messages={{
            allDay: "Journée entière",
            previous: "Précédent",
            next: "Suivant",
            today: "Aujourd'hui",
            month: "Mois",
            week: "Semaine",
            day: "Jour",
            agenda: "Agenda",
            date: "Date",
            time: "Heure",
            event: "Événement",
            noEventsInRange: "Aucun événement dans cette période.",
            showMore: (total) => `+ ${total} plus`,
          }}
          formats={{
            dateFormat: "DD",
            dayFormat: (date, culture, localizer) =>
              localizer.format(date, "dddd DD MMMM", culture),
            dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
              localizer.format(start, "DD MMMM", culture) +
              " – " +
              localizer.format(end, "DD MMMM", culture),
            monthHeaderFormat: "MMMM YYYY",
          }}
          culture="fr"
          popup
        />
      </div>
    </>
  );
}
