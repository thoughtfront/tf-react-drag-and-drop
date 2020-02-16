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