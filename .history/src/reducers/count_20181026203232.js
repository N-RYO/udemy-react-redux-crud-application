import { READ_EVENTS } from '../actions'

export default (state = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return { value: state.value + 1 }
        default:
            return state
    }
}