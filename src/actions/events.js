import Swal from 'sweetalert2';
import { types } from '../types/types'
import { fetchConToken } from '../helpers/fetch';
import { prepareEvents } from '../helpers/prepareEvents';

export const startAddNewEvent = (event) => async (dispatch, getState) => {

    const { uid, name } = getState().auth;

    try {

        const resp = await fetchConToken('events', event, 'POST');
        const body = await resp.json();

        if (body.ok) {

            event.id = body.eventSaved.id;
            event.user = { _id: uid, name: name }

            dispatch(eventAddNew(event));

        }


    } catch (error) {
        console.log(error);
    }

}

export const startEventsLoading = () => async (dispatch) => {

    try {

        const resp = await fetchConToken('events');
        const body = await resp.json();

        const events = prepareEvents(body.events);

        dispatch(eventLoaded(events));

    } catch (error) {
        console.log(error);
    }

}


export const startUpdateEvent = (event) => async (dispatch) => {

    try {

        const resp = await fetchConToken(`events/${event.id}`, event, 'PUT');
        const body = await resp.json();

        if (body.ok) {
            dispatch(eventUpdated(event));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }

    } catch (error) {
        console.log(error);
    }
}


export const startDeleteEvent = () => async (dispatch, getState) => {

    const {id} = getState().calendar.activeEvent;

    try {

        const resp = await fetchConToken(`events/${id}`, {}, 'DELETE');
        const body = await resp.json();

        if (body.ok) {
            dispatch(eventDeleted());
        } else {
            Swal.fire('Error', body.msg, 'error');
        }



    } catch (error) {
        console.log(error);
    }
}





const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

const eventUpdated = (event) => ({
    type: types.eventUpdated,
    payload: event
});

const eventDeleted = () => ({
    type: types.eventDeleted
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = () => ({
    type: types.eventClearActiveEvent
});

export const eventLoaded = (events) => ({
    type: types.eventLoaded,
    payload: events
});