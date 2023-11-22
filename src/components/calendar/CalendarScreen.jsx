import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgColor: '#fafafa',
    notes: 'Comprar el pastel',
    user: {
        _id: '123',
        name: 'Francisco'
    }
}];

export const CalendarScreen = () => {

    const dispatch = useDispatch();

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal())
    }

    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e));
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    return (
        <div className='calendar-screen'>
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                messages={messages}
                components={{ event: CalendarEvent }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
            />

            <AddNewFab />
            <CalendarModal />

        </div>
    );
}
