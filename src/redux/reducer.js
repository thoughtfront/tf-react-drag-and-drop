import constants from './constants';
import * as errors from '../utils/error';

const initState = {
    groups: [],
    groupItems: {},
    draggingItem: null,
    originalGroup: null,
};

export default (state=initState, action) => {

    switch(action.type) {
        case constants.REGISTER_GROUP: {
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

        case constants.SET_DRAGGING_ITEM: {
            const { draggingItem, originalGroup } = action.payload;
            return {
                ...state,
                draggingItem,
                originalGroup,
            }
        }

        case constants.DROP_IN_GROUP: {
            const { dropGroup } = action.payload;
            const { originalGroup, draggingItem, groupItems } = state;

            // For now if original group and drop gorup are the same then ignore
            if (dropGroup === originalGroup) return {...state}

            const originalItemIndex = groupItems[originalGroup].indexOf(draggingItem);

            return {
                ...state,
                groupItems: {
                    ...groupItems,
                    [originalGroup]: [
                        ...groupItems[originalGroup].slice(0,originalItemIndex),
                        ...groupItems[originalGroup].slice(originalItemIndex+1),
                    ],
                    [dropGroup]: [
                        ...groupItems[dropGroup],
                        draggingItem,
                    ],
                },
                draggingItem: null,
                originalGroup: null,
            }
        }

        default: return {...state};
    }
}