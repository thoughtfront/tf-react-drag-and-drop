import constants from './constants';
import * as errors from '../utils/error';

const initState = {
    groups: [],
    groupItems: {},
    itemGroups: {},
};

export default (state=initState, action) => {

    switch(action.type) {
        case constants.REGISTER_GROUP: {
            let groups;
            // Groups need to be uniq so throw warning if already exists and to NOT
            // change existing values
            if (state.groups.includes(action.payload)) {
                errors.duplicateGroupNameError(action.payload);
                return {...state};
            }


            return {
                ...state,
                groups: [
                    ...state.groups,
                    action.payload,
                ],
                groupItems: {
                    ...state.groupItems,
                    [action.payload]: [],
                }
            }
            break;
        }

        case constants.REGISTER_ITEM: {
            const { item, groupName } = action.payload
            return {
                ...state,
                groupItems: {
                    ...state.groupItems,
                    [groupName]: state.groupItems[groupName] ? [
                        ...state.groupItems[groupName],
                        item,
                    ] : [
                        item,
                    ]
                }
            }
        }

        case constants.CLEAR_REGISTERED_GROUP: {
            const groupIndex = state.groups.indexOf(action.payload);
            const groupItems = {...state.groupItems};
            delete groupItems[action.payload];
            return {
                ...state,
                groups: [
                    ...state.groups.slice(0,groupIndex),
                    ...state.groups.slice(groupIndex+1),
                ],
                groupItems,
            }
        }

        default: return {...state};
    }

    return {...state};
}