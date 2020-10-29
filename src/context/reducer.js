function reducer(state, action) {
    switch (action.type) {
        case 'SET_USERNAME':
            state.userName = action.newUserName
            return {...state}

        default:
            return state;
    }
}

export {reducer};