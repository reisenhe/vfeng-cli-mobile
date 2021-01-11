import * as types from './mutation-types'

const mutations = {
    [types.SET_DATE_RANGE](state, dateRange) {
        state.dateRange = dateRange
    },
    [types.SET_HOTEL_LIST_OBJ](state, hotelListObj) {
        state.hotelListObj = hotelListObj
    }
}

export default mutations