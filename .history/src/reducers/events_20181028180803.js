import _ from 'lodash'

import { READ_EVENTS } from '../actions'

export default (eve = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            //console.log(action.response.data)
            return _.mapkeys(action.response.data, 'id')
        default:
            return eve
    }
}