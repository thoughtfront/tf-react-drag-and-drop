import React, { useState } from 'react';

export default function Toggle() {
    const [on, setOn] = useState(false);
    return (
        <div>
            <button
                type='button'
                onClick={ () => setOn(!on) }
            >
                CLICK
            </button>
            <span>{on ? 'ON' : 'OFF'}</span>
        </div>
    )
}