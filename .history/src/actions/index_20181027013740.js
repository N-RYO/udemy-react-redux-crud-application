import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 

export const readEvents = () => dispatch => {
    axios.get('${ROOT_URL}/events${QUERYSTRING}')
    dispatch({ type: READ_EVENTS })
}