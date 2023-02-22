import * as studentsService from "../API/studentsService";
import { call, put } from 'redux-saga/effects'
import { actSuccess } from "../redux/actions";

export const getStudents = function* () {
    try {
        let listStudents = yield call(studentsService.GET_STUDENTS)
        yield put(actSuccess(listStudents))
    } catch (error) {

    }
}

export const createStudent = function* (action) {
    try {
        yield call(studentsService.POST_STUDENTS, action.payload)
        yield getStudents()
    } catch (error) {

    }
}

export const updateStudent = function* (action) {
    try {
        yield call(studentsService.PUT_STUDENT, action.payload)
        yield getStudents()
    } catch (error) {

    }
}

export const deleteStudent = function* (action) {
    try {
        yield call(studentsService.DELETE_STUDENT, action.payload)
        yield getStudents()
    } catch (error) {

    }
}