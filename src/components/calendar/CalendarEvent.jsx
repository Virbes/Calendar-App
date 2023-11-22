import React from 'react';

export const CalendarEvent = ({event}) => {
    return (
        <>
            <strong>{event.title}</strong>
            <span>-{event.user.name}</span>
        </>
    );
}
