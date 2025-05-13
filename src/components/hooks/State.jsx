import React, { useState } from "react";

function EventFunction() {
    const [Firstname, SetFirstName] = useState ('kunal')

    const chnageName =() => {
        SetFirstName('salave')
    }
    return(
        <div>
            <h2>Event</h2>
            <h3>My Name is: {Firstname}</h3>
            <button onClick={chnageName}>Click Me</button>
        </div>
    )
}
export default EventFunction;

