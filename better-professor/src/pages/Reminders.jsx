import React from "react";
import ReminderList from "../components/ReminderList";

const Reminders = (props) => {
    console.log('reminder', props);
    return (
        <div>
            <ReminderList {...props} />
        </div>
    )
}

export default Reminders;