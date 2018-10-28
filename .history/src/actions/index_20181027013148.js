import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

export const readEvents = () => dispatch => {
    type: READ_EVENTS
}