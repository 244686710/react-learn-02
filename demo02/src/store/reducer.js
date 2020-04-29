const defaultState = {
    inputValue: 'yuyd',
    list: []
}

export default (state = defaultState, action) => {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case 'change_input':
            newState.inputValue = action.value
            return newState
        case 'add_item':
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        default:
            return state
    }
}