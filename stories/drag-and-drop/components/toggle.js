import React, { useState } from 'react';

export default function Toggle(props) {
    const [on, setOn] = useState(props.on);
    return (
        <div>
            <button
                type='button'
                onClick={ () => {
                    setOn(!on);
                    props.onChange(!on);
                }}
            >
                CLICK
            </button>
            <span>{on ? 'ON' : 'OFF'}</span>
        </div>
    )
}