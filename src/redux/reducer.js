import constants from './constants';

const initState = {
    groups: [],
};

export default (state=initState, action) => {

    switch(action.type) {
        case constants.REGISTER_GROUP: {
            return {
                ...state,
                groups: [
                    ...state.groups,
                    action.payload,
                ],
            }
            break;
        }

        default: return {...state};
    }

    return {...state};
}