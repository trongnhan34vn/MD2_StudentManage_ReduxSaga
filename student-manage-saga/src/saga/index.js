import * as actionsType from "../redux/const/actionsType";
import * as studentsSaga from "./studentsSaga"
import { all, takeLatest } from "redux-saga/effects"

export const rootSaga = function* () {
    yield all(
        [
            takeLatest(actionsType.GET_STUDENTS, studentsSaga.getStudents),
            takeLatest(actionsType.CREATE, studentsSaga.createStudent),
            takeLatest(actionsType.UPDATE, studentsSaga.updateStudent),
            takeLatest(actionsType.DELETE, studentsSaga.deleteStudent)
        ]
    )
}