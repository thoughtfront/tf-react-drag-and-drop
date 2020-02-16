import constants from './constants';

const initState = {
    groups: [],
    groupItems: {},
    itemGroups: {},
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

        default: return {...state};
    }

    return {...state};
}