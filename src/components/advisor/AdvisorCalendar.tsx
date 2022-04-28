import { useState, ReactNode } from 'react';
import { Calendar, Views, luxonLocalizer, SlotInfo } from 'react-big-calendar';
import { DateTime } from 'luxon';
import EventModal from '../shared/EventModal';
import { Box } from '@mui/material';
import { Computer as ComputerIcon } from '@mui/icons-material';
import { SlotSessions } from '../student/StudentBooking';

export interface CalendarEvent {
  id: string;
  color: string;
  title: ReactNode;
  start: Date;
  end: Date;
}

export const isCalendarEvent = (
  event: CalendarEvent | SlotInfo | null | SlotSessions
): event is CalendarEvent => {
  return event ? 'id' in event : false;
};

const localizer = luxonLocalizer(DateTime);

const AdvisorCalendar = () => {
  const [event, setEvent] = useState<CalendarEvent | SlotInfo | null>(null);

  return (
    <Box p={2}>
      <Calendar<CalendarEvent>
        localizer={localizer}
        defaultView={Views.WEEK}
        views={[Views.WEEK, Views.DAY, Views.AGENDA]}
        events={[
          {
            id: '0',
            color: '#9eded0',
            title: (
              <Box display="flex" alignItems="center">
                <ComputerIcon /> 2
              </Box>
            ),
            start: DateTime.now().set({ hour: 12, minute: 0 }).toJSDate(),
            end: DateTime.now()
              .set({ hour: 12, minute: 0 })
              .plus({ hour: 1 })
              .toJSDate(),
          },
          {
            id: '1',
            color: '#d6e2f0',
            title: (
              <Box display="flex" alignItems="center">
                <ComputerIcon /> 1
              </Box>
            ),
            start: DateTime.now().set({ hour: 12, minute: 0 }).toJSDate(),
            end: DateTime.now()
              .set({ hour: 12, minute: 0 })
              .plus({ hour: 1 })
              .toJSDate(),
          },
        ]}
        eventPropGetter={(event, start, end, isSelected) => ({
          style: { backgroundColor: event.color, color: 'black' },
        })}
        onSelectEvent={setEvent}
        onSelectSlot={setEvent}
        selectable
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
      />
      <EventModal eventOrSlot={event} onClose={() => setEvent(null)} />
    </Box>
  );
};

export default AdvisorCalendar;