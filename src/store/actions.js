import * as types from './mutation-types'

export const setDateRange = function ({commit}, {startDate, endDate}) {
    commit(types.SET_START_DATE, startDate)
    commit(types.SET_END_DATE, endDate)
}