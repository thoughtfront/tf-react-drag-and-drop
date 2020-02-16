import constants from './constants';

export const registerGroup = groupName => ({
    type: constants.REGISTER_GROUP,
    payload: groupName,
});

export const registerItem = (item, groupName) => ({
    type: constants.REGISTER_ITEM,
    payload: {
        item,
        groupName,
    },
});

export const clearGroup = groupName => ({
    type: constants.CLEAR_REGISTERED_GROUP,
    payload: groupName,
})