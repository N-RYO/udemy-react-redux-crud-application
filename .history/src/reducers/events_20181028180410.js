import _ from 'lodash'

import { READ_EVENTS } from '../actions'

export default (state = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            console.log(action.response.data)
            console.log(_.mapkeys(action.responsen))
            return state
        default:
            return state
    }
}