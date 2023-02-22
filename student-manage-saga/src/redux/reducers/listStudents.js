import * as actionsType from "../const/actionsType";

const initState = {
    listStudents: [],
    selectedStudent: null,
}

const listStudents = (state = initState, action) => {
    switch (action.type) {
        case actionsType.SUCCESS:
            return { ...state, listStudents: [...action.payload] }
        case actionsType.SEEN:
            return { ...state, selectedStudent: action.payload.student }
        case "CONTROL/TOGGLE":
            if (action.payload) {
                return {...state, selectedStudent: ''}
            }
        default:
            return state
    }
}

export default listStudents