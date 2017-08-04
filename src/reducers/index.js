import {ADD_REMINDER, DELETE_REMINDER} from '../constants'

function reminder(action) {
    return {
        text: action.text,
        id: Math.random()
    }
}

const reminders = (state = [], action) => {
    let reminders = null;
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminders as state', reminders);
            return reminders;
         break;
        case DELETE_REMINDER:

        default:
            return state;
    }
};

export default reminders;