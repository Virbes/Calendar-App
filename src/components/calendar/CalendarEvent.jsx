import React from 'react';

export const CalendarEvent = ({event}) => {
    return (
        <>
            <strong>~ {event.user.name}</strong><br />
            <span>{event.title}</span>
        </>
    );
}
