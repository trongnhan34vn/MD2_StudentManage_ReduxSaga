import * as actionsType from "./const/actionsType"

export const actGetStudents = () => {
    return {
        type: actionsType.GET_STUDENTS
    }
}

export const actSuccess = (data) => {
    return {
        type: actionsType.SUCCESS,
        payload: data
    }   
}

export const actToggle = (value) => {
    return {
        type: "CONTROL/TOGGLE",
        payload: value
    }
}

export const actSearch = (search) => {
    return {
        type: actionsType.SEARCH,
        payload: search
    }
}

export const actSort = (sortValue) => {
    return {
        type: actionsType.SORT,
        payload: sortValue
    }
}

export const actCreateStudent = (student) => {
    return{
        type: actionsType.CREATE,
        payload: student
    }
}

export const actSeenStudent = (value) => {
    return {
        type: actionsType.SEEN,
        payload: value
    }
}

export const actUpdateStudent = (student) => {
    return {
        type: actionsType.UPDATE,
        payload: student
    }
}

export const actDeleteStudent = (student) => {
    return {
        type: actionsType.DELETE,
        payload: student
    }
}