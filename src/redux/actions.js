import constants from './constants';

export const registerGroup = groupName => ({
    type: constants.REGISTER_GROUP,
    payload: groupName,
});