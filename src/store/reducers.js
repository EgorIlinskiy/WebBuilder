const initState = {
    componentsList: [],
    isDisabled: false,
    isLoaded: false
};


function builderReducers(state = initState, action) {

    switch (action.type) {
        // case "SET_LOAD_DATA":
        //     {
        //         let newList = action.data
        //         return {...state, componentsList: newList, isLoaded: true }
        //     }
        case "ADD_COMPONENT":
            {
                let newList = [];
                state.componentsList.forEach(elem => { if (elem) { newList.push(elem) } })
                newList.push(action.element)
                return {...state, componentsList: newList };
            }
        case "SWITCH_POS_DOWN":
            {
                let newList = [];
                state.componentsList.forEach(elem => { if (elem) { newList.push(elem) } })
                if (newList[action.id + 1] !== undefined) {
                    newList.splice(action.id + 2, 0, newList[action.id])
                    newList.splice(action.id, 1)

                }

                return {...state, componentsList: newList };

            }
        case "SWITCH_POS_UP":
            {
                let newList = [];
                state.componentsList.forEach(elem => { if (elem) { newList.push(elem) } })
                if (action.id !== 0) {
                    newList.splice(action.id - 1, 0, newList[action.id])
                    newList.splice(action.id + 1, 1)
                }
                return {...state, componentsList: newList };

            }
        case "DELETE_ELEMENT":
            {
                let newList = [];
                state.componentsList.forEach((elem, index) => { if (elem && index !== action.id) { newList.push(elem) } })
                return {...state, componentsList: newList };

            }
        case "SWITCH_DISABLED":
            {

                return {...state, isDisabled: action.bool };

            }
        default:
            return state;

    }
}

export default builderReducers;