import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

export const readEvents = () => dispatch => {
    dispatch ({ type: READ_EVENTS })
}