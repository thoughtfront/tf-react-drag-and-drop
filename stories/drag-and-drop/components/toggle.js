import React, { useState } from 'react';

const styles = {
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid grey',
    margin: '25px 25px',
}

export default function Toggle(props={}) {
    const [on, setOn] = useState(props.isOn);
    return (
        <div style={styles}>
            <button
                type='button'
                onClick={ () => {
                    setOn(!on);
                    !!props.onChange && props.onChange(!on);
                }}
            >
                CLICK
            </button>
            <span>{on ? 'ON' : 'OFF'}</span>
        </div>
    )
}