import filters from "./filters";
import listStudents from "./listStudents";
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ listStudents, filters })

export default rootReducer