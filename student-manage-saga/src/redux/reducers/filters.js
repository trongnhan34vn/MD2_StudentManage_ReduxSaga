import * as actionsType from "../const/actionsType"
const initState = {
    search: '',
    sort: {
        sortBy: '',
        sortDir: ''
    },
    toggle: {
        status: false,
        action: ''
    }
}

const filters = (state = initState, action) => {
    switch (action.type) {
        case "CONTROL/TOGGLE":
            return {
                ...state, toggle: {
                    status: !state.toggle.status,
                    action: action.payload
                }
            }
        case actionsType.SEARCH:
            return { ...state, search: action.payload }

        case actionsType.SORT:
            return { ...state, sort: action.payload }
        case actionsType.SEEN:
            return {
                ...state, toggle: {
                    status: true,
                    action: action.payload.action
                }
            }
        default:
            return state
    }
}

export default filters
